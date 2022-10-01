import { Ship } from "./ship";

const SIZE = 10;
export const Gameboard = () => {
    let board = [];
    let missedShots = [];

    const initializeBoard = (() => {
        for (let i = 0; i < SIZE; i++) {
            board[i] = [];
            for (let j = 0; j < SIZE; j++) {
                board[i].push(null);
            }
        }
    })();

    const canPlace = (loc1, loc2, size, direction) => {
        if (direction === "horizontal") {
            for (let i = 0; i < size; i++) {
                if (board[loc1][loc2+i] != null) return false
            }
            return true
        }
        if (direction === "vertical") {
            for (let i = 0; i < size; i++) {
                if (board[loc1+i][loc2] != null) return false
            }
            return true
        }
    }

    //Wrap canPlace() around entire placeship logic
    const placeShip = (loc1, loc2, size, direction) => {
        let ship = Ship(size);
        let shipPos = 0
        if (direction === "horizontal") {
            if ((loc2 + ship.shipSize) > 10) return false;
            if (canPlace(loc1, loc2, size, direction)) {
                for (let i = 0; i < ship.shipSize; i++) {
                    board[loc1][loc2+i] = {ship, shipPos};
                    shipPos++
                }
            }
        }
        
        if (direction === "vertical") {
            if ((loc1 + ship.shipSize) > 10) return false;
            if (canPlace(loc1, loc2, size, direction)) {
                for (let i = 0; i < ship.shipSize; i++) {
                    board[loc1+i][loc2] = {ship, shipPos};
                    shipPos++
                }
            }

        }
        
    }

    
    const receiveAttack = (loc1, loc2) => {
        if (board[loc1][loc2] === null) {
            //console.log("Miss")
            //board[loc1][loc2] = "miss"  Could maybe do this
            //attack misses; record location missed somehow
            missedShots.push([loc1, loc2])
            return board[loc1][loc2]
        }
        if (typeof board[loc1][loc2] === 'object' && board[loc1][loc2].ship.shipData[board[loc1][loc2].shipPos] === "hit") {
            //console.log("Already hit")
            //Don't allow user to click here bc they already attacked at this location
            return false
        }
        if (typeof board[loc1][loc2] === 'object') {
            board[loc1][loc2].ship.hit(board[loc1][loc2].shipPos)
            return
        }
    }

    const isSunk = (loc1, loc2) => {
        //console.log(board[loc1][loc2])
        return board[loc1][loc2].ship.isSunk() === true ? true : false
    }

    const allSunk = (board) => {
        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                if (board[i][j] != null && board[i][j].ship.isSunk() === false) return false;
            }
        }
        return true;
    }





    return {board, placeShip, canPlace, receiveAttack, isSunk, allSunk};
}

let bor = Gameboard()
bor.placeShip(0, 4, 3, "horizontal")
//bor.placeShip(0, 1, 4, "horizontal")
console.log(bor.board)
//bor.placeShip(1, 0, 4, "horizontal")
bor.placeShip(5, 1, 4, "vertical")
//bor.receiveAttack(4, 5)


bor.receiveAttack(0, 4)
bor.receiveAttack(0, 7)
bor.receiveAttack(0, 6)
bor.receiveAttack(0, 5)


bor.receiveAttack(5, 1)
bor.receiveAttack(5, 1)

console.log(bor.allSunk(bor.board))