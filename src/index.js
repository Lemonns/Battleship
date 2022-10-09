import './style.css'
import { Gameboard } from './gameboard'
import { Ship } from './ship';
import { Player } from './player';
import { Bot } from './AI'
import { renderGrid, addCoordinates, renderBoardData, addPlayerEventListeners, rotateListener, addBotBoardListeners } from './DOM/render'
import {gameLoop} from './game'

/* Test Game */

/*
let player1 = Player("Caligula");
let player2 = Player("Marcus");

player1.board.placeShip(0, 1, 4, "horizontal")
console.log(player1.board.board);

player2.attack(player1, 0, 1)
player2.attack(player1, 1, 1)
player2.attack(player1, 2, 1)
player2.attack(player1, 3, 1)

/*
let player2 = Player();
let player1 = Player();

player1.board.placeShip(0, 1, "horizontal")
//player1.board.placeShip(1, 2, "vertical")


player2.attack(player1, 0, 1)
player2.attack(player1, 0, 2)
//player2.attack(player1, 0, 3)
player2.attack(player1, 0, 4)
player2.attack(player1, 0, 5)


console.log(player1.board.board);
player2.attack(player1, 3, 2)
let ai = Bot()
console.log(ai.board.board)

//ai.tryAttack(player1)
//ai.tryAttack(player1)
//ai.tryAttack(player1)
//ai.tryAttack(player1)


renderGrid("player-board-item" ,document.querySelector('.player'))
renderGrid("ai-board-item", document.querySelector('.bot-ai'))

addCoordinates(document.querySelectorAll('.player-board-item'), "player-coords")
addCoordinates(document.querySelectorAll('.ai-board-item'), "ai-coords")

renderBoardData(ai.board.board, "ai-coords")
renderBoardData(player1.board.board, "player-coords")
//console.log(player1.board.isSunk(0, 2))

addPlayerEventListeners(player1, document.querySelectorAll(".player-board-item"))
addBotBoardListeners(ai, document.querySelectorAll(".ai-board-item"), player1)
//console.log(player1.board.shipSizeTracker)

rotateListener(player1)



//console.log(player1.turn)
//player1.setTurnFalse()
//console.log(player1.turn)


//console.log(ai.turn)
ai.setTurnTrue()
//console.log(ai.turn)
*/

gameLoop()