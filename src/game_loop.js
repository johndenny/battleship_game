import player from "./player"
import gamePrint from "./game_print"
import shipPlacement from "./ship_placement"

export default function gameLoop() {
    gamePrint();
    const playerOne = player();
    const playerTwo = player();
    playerOne.myGameboard.updatePlayerName('Computer');
    const shipPlacements = shipPlacement();
    playerOne.myGameboard.addNewShip(shipPlacements.aircraftCarrier);
    playerOne.myGameboard.addNewShip(shipPlacements.battleship);
    playerOne.myGameboard.addNewShip(shipPlacements.cruiser);
    playerOne.myGameboard.addNewShip(shipPlacements.destroyer1);
    playerOne.myGameboard.addNewShip(shipPlacements.destroyer2);
    playerOne.myGameboard.addNewShip(shipPlacements.submarine1);
    playerOne.myGameboard.addNewShip(shipPlacements.submarine2);
    playerTwo.myGameboard.checkRandomShipCoordinates(5);
    playerTwo.myGameboard.checkRandomShipCoordinates(4);
    playerTwo.myGameboard.checkRandomShipCoordinates(3);
    playerTwo.myGameboard.checkRandomShipCoordinates(2);
    playerTwo.myGameboard.checkRandomShipCoordinates(2);
    playerTwo.myGameboard.checkRandomShipCoordinates(1);
    playerTwo.myGameboard.checkRandomShipCoordinates(1);
    [...document.querySelectorAll('.playerTwoGameBoard .gameboardCoordinateX')]
        .forEach((element) => {
            element.addEventListener('click', playerTwo.receiveCoordinates);
            element.addEventListener('click', playerOne.myGameboard.createCoordinates);
        });
    [...document.querySelectorAll('.shipSectionContainer')]
        .forEach((element) => {
            element.addEventListener('dragstart', shipPlacements.drag);
            element.addEventListener('dragend', shipPlacements.sectionToggle);
        });
    [...document.querySelectorAll('.playerOneGameBoard .gameboardCoordinateX')]
        .forEach((element) => {
            element.addEventListener('drop', shipPlacements.drop);
            element.addEventListener('dragover', shipPlacements.allowDrop);
        });
    [...document.querySelectorAll('.shipSection')].forEach((element) => {
        element.addEventListener('mousedown', shipPlacements.shipSectionAdjustment);
    });
    [...document.querySelectorAll('.shipButton')].forEach((element) => {
        element.addEventListener('click', shipPlacements.shipSelectionSwitch);
    })
    document.querySelector('.rotateButton')
        .addEventListener('click', shipPlacements.rotateToggle);
    [...document.querySelectorAll('.shipSelectionContainer')].forEach((element) => {
        element.addEventListener('animationend', shipPlacements.finishRotate)
    })
    document.querySelector('.startGameButton').addEventListener('click', playerOne.startButton);
    document.querySelector('.playButton').addEventListener('click', playerTwo.playerNameStart);
    const playAgainButton = () => {
        document.querySelector('.entireContainer').remove();
        gameLoop();
    }
    document.querySelector('.playAgain').addEventListener('click', playAgainButton);
}