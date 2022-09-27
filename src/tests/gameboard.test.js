import { Gameboard } from "../gameboard";


//Tests if board was initialized properly
test("initializes a 10x10 board", () => {
    let testBoard = Gameboard()
    expect(testBoard.board.length && testBoard.board[0].length && testBoard.board[9].length).toBe(10);
});

