const newBoard = () => Array(3).fill().map(() => Array(3).fill().map(() => null));

const getWinner = board => {
    for (const row of board) {
        if (row[0] && row[0] === row[1] && row[1] === row[2]) {
            return row[0];
        }
    }

    return null;
};

module.exports = {
    newBoard,
    getWinner
};

