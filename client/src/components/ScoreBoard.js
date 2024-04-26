// Keeps track of the score between X, O, and Draws currently have
const ScoreBoard = ({stats}) => {
    return (
        <div>
            <h5>Scores</h5>
            <table>
                <thead>
                    <tr>
                        <td>X wins</td>
                        <td>O wins</td>
                        <td>Draws</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{stats["X"]}</td>
                        <td>{stats["O"]}</td>
                        <td>{stats["Draws"]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};


export default ScoreBoard;