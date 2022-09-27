const SIZE = 10;

const Gameboard = () => {
    let board = [];

    const initializeBoard = (() => {
        for (let i = 0; i < SIZE; i++) {
            board[i] = [];
            for (let j = 0; j < SIZE; j++) {
                board[i].push(null);
            }
        }
    })();

    return {board};
}

export {Gameboard};

//let bor = Gameboard();
//bor.board[9][9] = 'hit'
//console.log(bor.board)