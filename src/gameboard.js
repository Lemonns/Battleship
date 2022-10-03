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
                if (board[loc1][loc2+i] != null) {
                    console.log(`Ship already in the location ${loc1}, ${loc2}`)
                    return false
                }
            }
            return true
        }
        if (direction === "vertical") {
            for (let i = 0; i < size; i++) {
                if (board[loc1+i][loc2] != null){
                    console.log("Ship already in the location")
                    return false
                } 
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
                    board[loc1][loc2+i] = {ship, shipPos, boardLocation:[loc1, loc2+i]}; //maybe return an issunk boolean
                    shipPos++
                }
            }else {
                return false;
            }
        }
        
        if (direction === "vertical") {
            if ((loc1 + ship.shipSize) > 10) return false;
            if (canPlace(loc1, loc2, size, direction)) {
                for (let i = 0; i < ship.shipSize; i++) {
                    board[loc1+i][loc2] = {ship, shipPos, location:[loc1+i, loc2]}; //maybe return an issunk boolean
                    shipPos++
                }
            }else {
                return false;
            }

        }
        
    }

    
    const receiveAttack = (loc1, loc2) => {
        if (board[loc1][loc2] === "miss") return false;

        if (board[loc1][loc2] === null) {
            board[loc1][loc2] = "miss"
            missedShots.push([loc1, loc2])
            return board[loc1][loc2]
        }

        //checks if user already attacked this ship position
        if (typeof board[loc1][loc2] === 'object' && board[loc1][loc2].ship.shipData[board[loc1][loc2].shipPos] === "hit") {
            console.log("Already attacked here")
            return false
        }
        if (typeof board[loc1][loc2] === 'object') {
            board[loc1][loc2].ship.hit(board[loc1][loc2].shipPos)
            return true
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

//0, 4
//let bor = Gameboard()
//console.log(bor.board)
//bor.placeShip(0, 4, 3, "horizontal")
//bor.placeShip(0, 7, 3, "vertical")
//bor.placeShip(3, 7, 3, "vertical")