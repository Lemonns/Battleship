export const Ship = (size) => {

    //Length of array/ship
    let shipSize = size; 

    //Array for ship based off of size. False = not hit, True = hit
    let shipData = new Array(shipSize).fill(false);

   
    //If ship is hit, make index true
    const hit = (loc) => {
        shipData[loc] = true;
    }

    //Checks to see if ship is sunk; If all elements in array are true, it is sunk
    const isSunk = () => {
        const status = shipData.every(ele => {
            if (ele === shipData[0] && ele != false) return true;
            return false;
        })
        return status;
    }

    return { shipSize, shipData, hit, isSunk };
}