import { Gameboard } from "./gameboard";
const NUMBER_OF_SHIPS = 5;

export const Bot = () => {
    let board = Gameboard();
    let turn = false;
    const DIRECTION = ["vertical", "horizontal"];
    const SIZES = [5, 4, 3, 3, 2, 1, 1, 1] //ship sizes

    const randomLoc = () => {
        return Math.floor(Math.random() * 10)
    }
    
    //Fills the board with 5 randomly placed ships when object is created
    const fillBoardShips = (() => {
        for (let i = 0; i < NUMBER_OF_SHIPS; i++) {
            while (i < NUMBER_OF_SHIPS) {
                if (board.placeShip(randomLoc(), randomLoc(), SIZES[i], DIRECTION[Math.floor(Math.random() * 2)]) === false) {
                    continue
                }else{
                    break
                }
            }
        }
    })();


    //Make an attack function that attacks when it is the bot's turn
    const tryAttack = (player) => {
        let attacking = true;
        while (attacking) {
            if (player.board.receiveAttack(randomLoc(), randomLoc()) === false) {
                continue
            }else{
                attacking = false
            }
        }
    }

    return {board, turn, tryAttack}
}


