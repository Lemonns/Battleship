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


//get coords from event listener with e.target or something


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
//passes array of all grid items as argument
export function addPlayerEventListeners(playerGridItems) {

}