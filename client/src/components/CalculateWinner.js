// Used to figure out who is the winner of the game
const CalculateWinner = (squares) => {
    const lines = [
        // Rows
        [0,1,2],
        [3,4,5],
        [6,7,8],
        // Columns
        [0,3,6],
        [1,4,7],
        [2,5,8],
        // Diagonals
        [0,4,8],
        [2,4,6]
    ];
    var hasDash = false;
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a] !== "-" && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        } else if (squares[a] === "-" || squares[b] === "-" || squares[c] === "-") {
            hasDash = true;
        };
    };
    if (!hasDash) {
        return " ";
    } else {
        return null;
    };
};


export default CalculateWinner;