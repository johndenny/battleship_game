/* eslint-disable no-plusplus */
import gameboard from "./gameboard"

export default function player() {
    const myGameboard = gameboard(); 
    const getShipCoordinates = () => {
        const allShipsArray = myGameboard.allShips;
        for (let i = 0; i < allShipsArray.length; i++) {
            const {coordinateList} = allShipsArray[i];
            for (let j = 0; j < coordinateList.length; j++) {
                const xId = allShipsArray[i].coordinateList[j].id
                const x = xId.split('');
                const yId = allShipsArray[i].coordinateList[j].parentElement.id
                const y = yId.split('');
                myGameboard.allShipsCoordinates.push(`${x[1]}${y[1]}`);
            }
        }
        console.log(myGameboard.allShipsCoordinates)
    }
    const startButton = () => {
        document.querySelector('.startGameButtonContainer').classList.toggle('selected');
        document.querySelector('.playerTwoGameBoard').classList.toggle('selected');
        document.querySelectorAll('.shipSectionContainer').forEach((element) => {
            element.classList.toggle('selected');
        })
        getShipCoordinates();
    }
    const receiveCoordinates = (event) => {
        const myParentNode = event.target.parentElement;
        const grandparentsNode = myParentNode.parentElement;
        const x = [...myParentNode.children]
            .findIndex((element) => element === event.target);
        const y = [...grandparentsNode.children]
            .findIndex((element) => element === myParentNode);
        const attack = myGameboard.receiveAttack(`${x}${y}`);
        event.target.classList.toggle(attack);
    }
    const playerNameStart = () => {
        document.querySelector('.nameInputContainer').classList.toggle('selected');
        document.querySelector('.playerOneGameBoard').classList.toggle('selected');
        document.querySelector('.shipSelectionContainer').classList.toggle('selected');
        const playerName = document.querySelector('#nameInput').value;
        myGameboard.updatePlayerName(playerName);
    }
    return {
        myGameboard,
        receiveCoordinates,
        getShipCoordinates,
        startButton,
        playerNameStart,
    };
}

