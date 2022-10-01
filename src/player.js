import { Gameboard } from "./gameboard";

const Player = (n) => {
    const name = n;
    let board = Gameboard();
    let turn = false;

    const attack = (player, loc1, loc2) => {
        player.board.receiveAttack(loc1, loc2);
    }

    return {board, turn, attack}
}

export {Player};