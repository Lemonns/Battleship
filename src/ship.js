import { isInteger } from "lodash";

export const Ship = (size) => {

    //Length of array/ship
    let shipSize = size; 

    //Array for ship based off of size. False = not hit, True = hit
    let shipData = [...Array(shipSize).keys()];

   
    //If ship is hit, make index true
    const hit = (loc) => {
        shipData[loc] = "hit";
    }

    //Checks to see if ship is sunk; If all elements in array are true, it is sunk
    const isSunk = () => {
        let status = true
        for (let i = 0; i < shipSize; i++) {
            if (shipData[i] != "hit") status=false
        }
        return status
    }

    return { shipSize, shipData, hit, isSunk };
}