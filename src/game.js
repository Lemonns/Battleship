import { Gameboard } from './gameboard'
import { Ship } from './ship';
import { Player } from './player';
import { Bot } from './AI'
import { renderGrid, addCoordinates, renderBoardData, addPlayerEventListeners, rotateListener, addBotBoardListeners, clearGame } from './DOM/render'

export function gameLoop() {
    clearGame()
    let player = Player();
    let ai = Bot();
    console.log(player.board.allSunk(player.board.board, player))
    renderGrid("player-board-item" ,document.querySelector('.player'))
    renderGrid("ai-board-item", document.querySelector('.bot-ai'))
    addCoordinates(document.querySelectorAll('.player-board-item'), "player-coords")
    addCoordinates(document.querySelectorAll('.ai-board-item'), "ai-coords")
    renderBoardData(ai.board.board, "ai-coords")
    renderBoardData(player.board.board, "player-coords")
    rotateListener(player)
    addPlayerEventListeners(player, document.querySelectorAll(".player-board-item"))

    //while (player.tracker < 5) continue;
    addBotBoardListeners(ai, document.querySelectorAll(".ai-board-item"), player)
    
    //while (player.board.allSunk(player.board.board) === false && ai.board.allSunk(ai.board.board) === false) {
        //continue


        //ai.tryAttack(player);
        //player.setTurnTrue()
        //continue;
    //return 0;
}
    
