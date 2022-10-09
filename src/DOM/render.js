import {gameLoop} from '../game'
//winner-display <-- winner display
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
export function clearGame() {
    //document.querySelector(".board-area").innerHTML = ""
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
                document.querySelector(`[${playerName}="${i} ${j}"]`).setAttribute('id', 'alive-ship')
            }
        }
    }
 }
}

//adds event listeners to player board that enables the placing of ships
//passes array of all grid items as argument\
//this will be for placing ships
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
        //console.log(player.rotateOption(player.rotateTracker))
    })
}
 


export function addBotBoardListeners(bot, botGridItems, player=null) {
    botGridItems.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(bot)
            if (player.board.allSunk(player.board.board, player) || bot.board.allSunk(bot.board.board)) {
                gameLoop()
                return
            }
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


function displayWinner(winner) {
    document.querySelector(".winner-display").textContent = `${winner}`
}


function isWinner(player, bot) {
    if (player.board.allSunk(player.board.board, player)) {
        //gameLoop();
        return "player loss";
    }
    else if (bot.board.allSunk(bot.board.board)) {
        //gameLoop();
        return "bot loss";
    }else {
        return false;
    }
}