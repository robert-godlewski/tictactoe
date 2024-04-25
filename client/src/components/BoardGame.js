// JS library
import {useState} from 'react';

// JS components
import Square from './Square';
import CalculateWinner from './CalculateWinner';


const BoardGame = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill("-"));

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

    const reset = () => {
        setSquares(Array(9).fill("-"));
        setXIsNext(true);
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
            <button onClick={reset}>Want to Play Again?</button>
        </>
    );
};


export default BoardGame;