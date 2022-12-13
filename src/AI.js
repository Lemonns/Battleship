import { Gameboard } from "./gameboard";
import { gameLoop } from "./game";
import { displayWinner } from "./DOM/render";
const NUMBER_OF_SHIPS = 5;

export const Bot = () => {
    let board = Gameboard();
    let turn = false;
    const DIRECTION = ["vertical", "horizontal"];


    const randomLoc = () => {
        return Math.floor(Math.random() * 10)
    }
    
    //Fills the board with 5 randomly placed ships when object is created
    const fillBoardShips = (() => {
        for (let i = 0; i < NUMBER_OF_SHIPS; i++) {
            while (i < NUMBER_OF_SHIPS) {
                if (board.placeShip(randomLoc(), randomLoc(), DIRECTION[Math.floor(Math.random() * 2)]) === false) {
                    continue
                }else{
                    break
                }
            }
        }
    })();


    //Attacks player board and detects winner if there is one
    const tryAttack = (player) => {
        let attacking = true;

        while (attacking) {
            if (displayWinner(player, board)) return true;
            if (player.board.receiveAttack(randomLoc(), randomLoc()) === false) {
                continue
            }else{
                attacking = false
                if (displayWinner(player, board)) {
                    return true;
                }
            }
        }
    }

    return {
              board, 
              turn, 
              tryAttack,
              setTurnFalse: function() {
                  this.turn = false;
              },
              setTurnTrue: function() {
                  this.turn = true;
              }
            }
}
