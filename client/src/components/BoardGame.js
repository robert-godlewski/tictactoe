// JS library
import {useState} from 'react';

// JS components
import Square from './Square';
import CalculateWinner from './CalculateWinner';
import ScoreBoard from './ScoreBoard';


const BoardGame = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill("-"));
    const [stats, setStats] = useState({"X": 0, "O": 0, "Draws": 0});

    const handleClick = (i) => {
        if (squares[i] !== "-" || CalculateWinner(squares)) {
            return;
        };
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        };
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    };

    const resetBoard = () => {
        setSquares(Array(9).fill("-"));
        setXIsNext(true);
        updateBoard(winner);
    };

    const updateBoard = (winner) => {
        if (!winner) {
            return;
        } else {
            if (winner === "X") {
                stats["X"]++;
            } else if (winner === "O") {
                stats["O"]++;
            } else {
                stats["Draws"]++;
            };
            setStats(stats);
        };
        console.log(stats);
    };

    const resetScore = () => {
        setStats({"X": 0, "O": 0, "Draws": 0});
        resetBoard();
    };

    const winner = CalculateWinner(squares);
    let status;
    if (winner && winner !== " ") {
        status = "Winner: " + winner;
    } else if (winner) {
        status = "It's a Draw";
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    };

    return (
        <>
            <ScoreBoard stats={stats}/>
            <div>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                </div>
                <div className='board-row'>
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                </div>
                <div className='board-row'>
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
                </div>
                <div>
                    <button onClick={resetBoard}>Want to Play Again?</button>
                    <button onClick={resetScore}>Want to Reset the Scores?</button>
                </div>
            </div>
        </>
    );
};


export default BoardGame;