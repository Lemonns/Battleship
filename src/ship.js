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
        const status = shipData.every(ele => {
            if (ele === shipData[0] && isInteger(ele) === false) return true;
            return false;
        })
        return status;
    }

    return { shipSize, shipData, hit, isSunk };
}