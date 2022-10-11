import {gameLoop} from '../game'

const WIDTH = 10;
const HEIGHT = 10;
const DIMENSIONS = WIDTH * HEIGHT;

//creates grid for board
export function renderGrid(n, container, board=null) {
    for (let i = 0; i < DIMENSIONS; i++) {
        container.setAttribute('style', `grid-template-columns: repeat(${WIDTH}, 1fr);  grid-template-rows: repeat(${HEIGHT}, 1fr);`);
        let newDiv = document.createElement('div');
        newDiv.className = n;
        container.appendChild(newDiv);
    }
}

//adds proper coordinates to id
export function addCoordinates(elements, playerName) {
    let index = 0
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            elements[index].setAttribute(playerName, `${i} ${j}`)
            index++
        }
    }
}

//clears game boards
export function clearGame() {
    document.querySelector(".bot-ai").innerHTML = ""
    document.querySelector(".player").innerHTML = ""
}

//renders all info from the two-dimensional board array (misses, hits, ships, and if ship is sunk)
export function renderBoardData(board, playerName) {
 for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
        if (board[i][j] === "miss") {
            document.querySelector(`[${playerName}="${i} ${j}"]`).setAttribute('id', 'miss-ship')
        }
        else if (board[i][j]) {
            if (board[i][j].ship.isSunk(i, j) === true) {
                document.querySelector(`[${playerName}="${i} ${j}"]`).setAttribute('id', 'sunk-ship')
            }
            else if (board[i][j].ship.isSunk(i, j) != true && board[i][j].ship.shipData[board[i][j].shipPos] === "hit") {
                document.querySelector(`[${playerName}="${i} ${j}"]`).setAttribute('id', 'hit-ship')
            }
            else {
                if (playerName == "ai-coords") document.querySelector(`[${playerName}="${i} ${j}"]`).setAttribute('id', 'alive-ship-ai');
                else document.querySelector(`[${playerName}="${i} ${j}"]`).setAttribute('id', 'alive-ship');
            }
        }
    }
 }
}

//adds event listeners to player board that enables the placing of ships
//checks if all ships are sunk
export function addPlayerEventListeners(player, playerGridItems) {
    playerGridItems.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(player)
            if (player.board.allSunk(player.board.board, player)){
                gameLoop()
                console.log(player)
            }
            
            let coordSet = e.target.getAttribute('player-coords').split(' ').map(Number)
            player.board.placeShip(coordSet[0], coordSet[1], player.rotateOption(player.rotateTracker), player)
            renderBoardData(player.board.board, "player-coords")
            console.log(player.tracker)
        })
    });
}

//adds event listener to rotate button
export function rotateListener(player) {
    const rotateButton = document.querySelector(".rotate")
    rotateButton.addEventListener('click', () => {
        player.rotateTracker+=1
    })
}
 

//add event listeners to bot grid items
//lets player attack board
export function addBotBoardListeners(bot, botGridItems, player=null) {
    botGridItems.forEach(item => {
        item.addEventListener('click', (e) => {
            let coordSet = e.target.getAttribute('ai-coords').split(' ').map(Number)
            console.log(player.gameStarted)
            if (player.turn) {
                if (player.attack(bot, coordSet[0], coordSet[1], player.gameStarted, player) === true) {
                    if (bot.tryAttack(player) === true) {
                        return
                    }
                    renderBoardData(bot.board.board, "ai-coords");
                    renderBoardData(player.board.board, "player-coords");
                }
                renderBoardData(bot.board.board, "ai-coords");
                renderBoardData(player.board.board, "player-coords");
            }else {
                return false;
            }
        })
    })
}

//Displayes winner for 5 seconds
//if there isn't one, returns false
export function displayWinner(player, botBoard) {
    
    if(player.board.allSunk(player.board.board)) {
        gameLoop();
        document.querySelector(".winner-display").textContent = "You Lose.";
        setTimeout(() => {document.querySelector(".winner-display").textContent = " "}, 3000)
        return true;

    }else if (botBoard.allSunk(botBoard.board)) {
        gameLoop();
        document.querySelector(".winner-display").textContent = "You Win!";
        setTimeout(() => {document.querySelector(".winner-display").textContent = " "}, 3000)
        return true;
    }else {
        return false
    }
}