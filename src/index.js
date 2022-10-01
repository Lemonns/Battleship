import './style.css'
import { Gameboard } from './gameboard'
import { Ship } from './ship';
import { Player } from './player';
import { Bot } from './AI'

/* Test Game */

/*
let player1 = Player("Caligula");
let player2 = Player("Marcus");

player1.board.placeShip(0, 1, 4, "horizontal")
console.log(player1.board.board);

player2.board.placeShip(0, 1, 4, "vertical")
console.log(player2.board.board)

player1.attack(player2, 0, 1)
player1.attack(player2, 1, 1)
player1.attack(player2, 2, 1)
player1.attack(player2, 3, 1)
console.log(player2.board.allSunk(player2.board.board))
*/
let ai = Bot()
console.log(ai.board.board)
