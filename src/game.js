import { Player } from './player';
import { Bot } from './AI'
import { renderGrid, addCoordinates, renderBoardData, addPlayerEventListeners, rotateListener, addBotBoardListeners, clearGame } from './DOM/render'

//Renders DOM
export function gameLoop() {
    clearGame()
    let player = Player();
    let ai = Bot();

    
    renderGrid("player-board-item" ,document.querySelector('.player'))
    renderGrid("ai-board-item", document.querySelector('.bot-ai'))
    addCoordinates(document.querySelectorAll('.player-board-item'), "player-coords")
    addCoordinates(document.querySelectorAll('.ai-board-item'), "ai-coords")
    renderBoardData(ai.board.board, "ai-coords")
    renderBoardData(player.board.board, "player-coords")
    rotateListener(player)
    addPlayerEventListeners(player, document.querySelectorAll(".player-board-item"))
    addBotBoardListeners(ai, document.querySelectorAll(".ai-board-item"), player)
}