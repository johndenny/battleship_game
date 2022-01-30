/* eslint-disable no-plusplus */
function gameboardPrint() {
    const gameboardContainer = document.createElement('div');
    gameboardContainer.className = 'gameboardContainer';
    for (let i = 0; i < 10; i++) {
        const gameboardCoordinateY = document.createElement('div');
        gameboardCoordinateY.className = 'gameboardCoordinateY';
        gameboardCoordinateY.id = `y${i}`;
        gameboardContainer.appendChild(gameboardCoordinateY);
        for (let j = 0; j < 10; j++) {
            const gameboardCoordinateX = document.createElement('div');
            gameboardCoordinateX.className = 'gameboardCoordinateX';
            gameboardCoordinateX.id = `x${j}`;
            gameboardCoordinateY.appendChild(gameboardCoordinateX);
        };
    };
    return gameboardContainer
}

function shipPrint(length, id) {
    const shipContainer = document.createElement('div');
    shipContainer.className = 'shipSectionContainer';
    shipContainer.id = id;
    shipContainer.draggable = 'true';

    for (let i = 0; i < length; i++) {
        const shipSection = document.createElement('div');
        shipSection.className = 'shipSection';
        shipContainer.appendChild(shipSection);
    };
    return shipContainer   
}

function shipButtonPrint(length, id) {
    const shipContainer = document.createElement('div');
    shipContainer.className = 'shipButton';
    shipContainer.id = id;

    for (let i = 0; i < length; i++) {
        const shipSection = document.createElement('div');
        shipSection.className = 'shipButtonSection';
        shipContainer.appendChild(shipSection);
    };
    return shipContainer    
}

export default function gamePrint() {
    const entireContainer = document.createElement('div');
        entireContainer.className = 'entireContainer';
    document.body.appendChild(entireContainer);

    const allGameBoards = document.createElement('div');
        allGameBoards.className = 'allGameBoards';
    entireContainer.appendChild(allGameBoards);

    const winnerDisplayContainer = document.createElement('div');
        winnerDisplayContainer.className = 'winnerDisplayContainer';
    allGameBoards.appendChild(winnerDisplayContainer);

    const winnerContainer = document.createElement('div');
        winnerContainer.className = 'winnerContainer';
    winnerDisplayContainer.appendChild(winnerContainer);

    const winnerTitle = document.createElement('div');
        winnerTitle.className = 'winnerTitle';
    winnerContainer.appendChild(winnerTitle);

    const nameSpan = document.createElement('span');
        nameSpan.className = 'nameSpan';
    winnerTitle.appendChild(nameSpan);

    const winnerSpan = document.createElement('span');
        winnerSpan.className = 'winnerSpan';
        winnerSpan.innerText = ' is the Winner!'
    winnerTitle.appendChild(winnerSpan);

    const playAgain = document.createElement('div');
        playAgain.className = 'playAgain';
        playAgain.innerText = 'Play Again';
    winnerContainer.appendChild(playAgain);

    const nameInputContainer = document.createElement('div');
        nameInputContainer.className = 'nameInputContainer selected'
    allGameBoards.appendChild(nameInputContainer);

    const gameStartInputs = document.createElement('div');
        gameStartInputs.className = 'gameStartInputs';
    nameInputContainer.appendChild(gameStartInputs);

    const gameTitle = document.createElement('span');
        gameTitle.className = 'gameTitle';
        gameTitle.innerText = 'Play BattleShip';
    gameStartInputs.appendChild(gameTitle);

    const inputLabel = document.createElement('label');
        inputLabel.htmlFor = 'nameInput';
        inputLabel.innerText = 'name';
    gameStartInputs.appendChild(inputLabel);

    const nameInput = document.createElement('input');
        nameInput.id = 'nameInput';
        nameInput.autocomplete = 'off';
    gameStartInputs.appendChild(nameInput);

    const playButton = document.createElement('div');
        playButton.className = 'playButton';
        playButton.innerText = 'Play';
    gameStartInputs.appendChild(playButton);

    const playerOneGameBoard = document.createElement('div');
        playerOneGameBoard.className = 'playerOneGameBoard';
    playerOneGameBoard.appendChild(gameboardPrint());
    allGameBoards.appendChild(playerOneGameBoard);  

    const playerTwoGameBoard = document.createElement('div');
        playerTwoGameBoard.className = 'playerTwoGameBoard';
    playerTwoGameBoard.appendChild(gameboardPrint());
    allGameBoards.appendChild(playerTwoGameBoard);

    const startGameButtonContainer = document.createElement('div');
        startGameButtonContainer.className = 'startGameButtonContainer';
    allGameBoards.appendChild(startGameButtonContainer);

    const startGameButton = document.createElement('div');
        startGameButton.className = 'startGameButton';
        startGameButton.innerText = 'Start';
    startGameButtonContainer.appendChild(startGameButton);
    const resetButton = document.createElement('div');
        resetButton.className = 'resetButton';
        resetButton.innerText = 'Reset';
    startGameButtonContainer.appendChild(resetButton);
    
    const shipSelectionContainer = document.createElement('div');
        shipSelectionContainer.className = 'shipSelectionContainer';
    allGameBoards.appendChild(shipSelectionContainer);

    const shipSelectionTitle = document.createElement('div');
        shipSelectionTitle.className = 'shipSelectionTitle';
        shipSelectionTitle.innerText = 'Place your Aircraft Carrier';
    shipSelectionContainer.appendChild(shipSelectionTitle);

    const shipsContainer = document.createElement('div');
        shipsContainer.className = 'shipsContainer';
    shipSelectionContainer.appendChild(shipsContainer);

    const aircraftCarrier = shipsContainer.appendChild(shipPrint(5, 'aircraftCarrier'));
        aircraftCarrier.classList.add('selected');
    shipsContainer.appendChild(shipPrint(4, 'battleship'));
    shipsContainer.appendChild(shipPrint(3, 'cruiser'));
    shipsContainer.appendChild(shipPrint(2, 'destroyer1'));
    shipsContainer.appendChild(shipPrint(2, 'destroyer2'));
    shipsContainer.appendChild(shipPrint(1, 'submarine1'));
    shipsContainer.appendChild(shipPrint(1, 'submarine2'));

    const rotateButtonContainer = document.createElement('div');
        rotateButtonContainer.className = 'rotateButtonContainer';
    shipSelectionContainer.appendChild(rotateButtonContainer)

    const rotateButton = document.createElement('div');
        rotateButton.className = 'rotateButton';
        rotateButton.innerHTML = '&#8635;'
    rotateButtonContainer.appendChild(rotateButton);

    const shipButtonContainer = document.createElement('div');
        shipButtonContainer.className = 'shipButtonContainer';
    shipSelectionContainer.appendChild(shipButtonContainer);

    const aircraftCarrierButton = shipButtonContainer
        .appendChild(shipButtonPrint(5, 'aircraftCarrierButton'));
        aircraftCarrierButton.classList.add('selected');
    shipButtonContainer.appendChild(shipButtonPrint(4, 'battleshipButton'));
    shipButtonContainer.appendChild(shipButtonPrint(3, 'cruiserButton'));
    shipButtonContainer.appendChild(shipButtonPrint(2, 'destroyer1Button'));
    shipButtonContainer.appendChild(shipButtonPrint(2, 'destroyer2Button'));
    shipButtonContainer.appendChild(shipButtonPrint(1, 'submarine1Button'));
    shipButtonContainer.appendChild(shipButtonPrint(1, 'submarine2Button'));
}