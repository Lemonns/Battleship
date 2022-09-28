import { Ship } from "../ship";

test("checks to see if ship is sunk", () => {
    let testShip1 = Ship(1);
    let testShip2 = Ship(2);
    let testShip4 = Ship(4);

    expect(testShip1.isSunk()).toBe(false);
    testShip1.hit(0);
    expect(testShip1.isSunk()).toBe(true);

    expect(testShip2.isSunk()).toBe(false);
    testShip2.hit(0);
    expect(testShip2.isSunk()).toBe(false);
    testShip2.hit(1);
    expect(testShip2.isSunk()).toBe(true)

    expect(testShip4.isSunk()).toBe(false);
    testShip4.hit(0);
    expect(testShip4.isSunk()).toBe(false);
    testShip4.hit(3);
    expect(testShip4.isSunk()).toBe(false);
    testShip4.hit(2);
    testShip4.hit(1);
    expect(testShip4.isSunk()).toBe(true);
});