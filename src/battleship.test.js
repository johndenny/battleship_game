/* eslint-disable no-undef */
import shipCordinatesArray from './ship_cordinates_array'
import gameboard from './gameboard'
import newShip from './new_ship'
import gameLoop from './game_loop'
import player from './player'

// test('create array of ships corodinates each cordinate is increased by one according to ship length', () => {
//     expect(shipCordinatesArray(2, 4, 5))
//       .toEqual([{x:2, y:4},{x:2, y:5},{x:2, y:6},{x:2, y:7},{x:2, y:8}]);
// });

// const aircraftCarrier = newShip(2, 5, 5);

// test('newShip splices hit into coordinate match', () => {
//     expect(aircraftCarrier.hit(2, 7))
//       .toEqual([{"x": 2, "y": 5}, {"x": 2, "y": 6}, "hit", {"x": 2, "y": 8}, {"x": 2, "y": 9}])
// })

// const cruiser = newShip(2, 3, 2);
// cruiser.hit(2, 3);
// cruiser.hit(2, 4);

// test ('isSunk changes shipSunk to False if all coordinates hit', () => {
//     expect(cruiser.isSunk()).toEqual(true)
// })


// const myGame = gameboard();
// myGame.receiveAttack(2, 3);
// myGame.receiveAttack(2, 4);
// myGame.receiveAttack(2, 5);
// myGame.receiveAttack(2, 6);
// myGame.receiveAttack(2, 7);
// myGame.aircraftCarrier.isSunk();
// myGame.receiveAttack(5, 5);
// myGame.receiveAttack(5, 6);
// myGame.receiveAttack(5, 7);
// myGame.receiveAttack(5, 8);
// myGame.battleship.isSunk();
// myGame.receiveAttack(7, 2);
// myGame.receiveAttack(7, 3);
// myGame.receiveAttack(7, 4);
// myGame.cruiser.isSunk();
// myGame.receiveAttack(7, 8);
// myGame.receiveAttack(7, 9);
// myGame.destroyer1.isSunk();
// myGame.receiveAttack(4, 2);
// myGame.receiveAttack(4, 3);
// myGame.destroyer2.isSunk();
// myGame.receiveAttack(10, 5);
// myGame.submarine1.isSunk();
// myGame.receiveAttack(3, 10);
// myGame.submarine2.isSunk();

// test('all ships sunk', () => {
//     expect(myGame.areAllShipsSunk())
//       .toEqual(true);
// })

// const myGameMisses = gameboard();
// myGameMisses.receiveAttack(1, 1);
// myGameMisses.receiveAttack(1, 2);

// test('do misses collect in misses array?', () => {
//     expect(myGameMisses.misses).toEqual([{"x": 1, "y": 1}, {"x": 1, "y": 2}]);
// })

// const battleshipGame = gameLoop();
// battleshipGame.playerOne.receiveAttack(1, 1);
// battleshipGame.playerOne.receiveAttack(1, 2);

// test('gameLoop', () => {
//     expect(battleshipGame.playerOne.misses).toEqual([{"x": 1, "y": 1}, {"x": 1, "y": 2}]);
// })

const playerTest = player('test');
playerTest.checkRandomShipCoordinates(4);
playerTest.checkRandomShipCoordinates(3);
playerTest.checkRandomShipCoordinates(2);
playerTest.checkRandomShipCoordinates(2);
playerTest.checkRandomShipCoordinates(1);
playerTest.checkRandomShipCoordinates(1);

test ('getRandomCoordinates', () => {
    expect(playerTest.checkRandomShipCoordinates(5)).toEqual([{}]);
})

