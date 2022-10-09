import { Gameboard } from "./gameboard";
import { gameLoop } from "./game";
const Player = () => {
    let board = Gameboard();
    let tracker = 0;
    let availableShips = [5, 4, 3, 3, 2]; 
    let turn = true;
    let rotateTracker = 0; 
    let gameStarted = false;
    

    const attack = (player, loc1, loc2, isStarted=false) => {
        if (isStarted) {
            if (player.board.receiveAttack(loc1, loc2) === true) return true;
        }
        return false; 
    }

    const rotateOption = (tracker) => {
        if (tracker % 2 === 0) {
            return "horizontal";
        }else {
            return "vertical";
        }
        
    }

    return { 
            board, 
            turn, 
            attack, 
            availableShips, 
            tracker, 
            rotateOption, 
            rotateTracker,
            gameStarted,
            setTurnFalse: function() {
                this.turn = false;
            },
            setTurnTrue: function() {
                this.turn = true;
            },
            setGameStarted: function() {
                this.gameStarted = true;
            }
            }
}

export {Player};