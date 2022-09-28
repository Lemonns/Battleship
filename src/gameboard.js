import { Ship } from "./ship";

const SIZE = 10;
export const Gameboard = () => {
    let board = [];

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
    //STORE OBJECTS IN BOARD ARRAY INSTEAD OF "ship"
    //STORE OBJECTS IN BOARD ARRAY INSTEAD OF "ship"
    //STORE OBJECTS IN BOARD ARRAY INSTEAD OF "ship"
    //STORE OBJECTS IN BOARD ARRAY INSTEAD OF "ship"
    //STORE OBJECTS IN BOARD ARRAY INSTEAD OF "ship"
    //STORE OBJECTS IN BOARD ARRAY INSTEAD OF "ship"
    const placeShip = (loc1, loc2, size, direction) => {
        let ship = Ship(size);
        if (direction === "horizontal") {
            if ((loc2 + ship.shipSize) > 10) return false;
            if (canPlace(loc1, loc2, size, direction)) {
                for (let i = 0; i < ship.shipSize; i++) {
                    board[loc1][loc2+i] = "ship";
                }
            }
        }
        
        if (direction === "vertical") {
            if ((loc1 + ship.shipSize) > 10) return false;
            if (canPlace(loc1, loc2, size, direction)) {
                for (let i = 0; i < ship.shipSize; i++) {
                    board[loc1+i][loc2] = "ship";
                }
            }

        }
        
    }

    //STORE OBJECTS IN BOARD ARRAY INSTEAD OF "ship"
    const receiveAttack = (loc1, loc2) => {
        if (board[loc1][loc2] === "ship") {
            //send hit function to ship that was hit
        }
        if (board[loc1][loc2] === null) {
            //attack misses
        }else {
            //already used attack on this location
        }
    }



    return {board, placeShip, canPlace, receiveAttack};
}

let bor = Gameboard()
bor.placeShip(0, 4, 3, "horizontal")
//bor.placeShip(0, 1, 4, "horizontal")
console.log(bor.board)
bor.placeShip(1, 0, 4, "horizontal")
bor.placeShip(5, 1, 4, "vertical")
//console.log(bor.canPlace(0, 2, 3))