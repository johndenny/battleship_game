/* eslint-disable no-plusplus */
export default function gameboard() {
    let playerName = null;
    const allShipsSunk = false;
    const hitsAndMisses = [];
    const hits = [];
    const allShips = [];
    let allShipsCoordinates = [];
    let lastMove = null;
    let nearbyCoordinates = [];
    const nearbyCenterCoordinate = [];
    const updatePlayerName = (name) => {
        playerName = name;
        return playerName
    }
    const areAllShipsSunk = () => {
        if (hits.length === 18) {
            document.querySelector('.playerOneGameBoard').classList.toggle('selected');
            document.querySelector('.playerTwoGameBoard').classList.toggle('selected');
            document.querySelector('.nameSpan').innerText = playerName;
            document.querySelector('.winnerDisplayContainer').classList.toggle('selected');
        }
    };   
    const receiveAttack = (xy) => {
        const coordinateFound = allShipsCoordinates.some((element) => element === xy);
        if (coordinateFound) {
            hitsAndMisses.push(xy)
            hits.push(xy);
            lastMove = 'hit';
            areAllShipsSunk();
            return 'hit'
        }
        hitsAndMisses.push(xy);
        lastMove = 'miss'
        areAllShipsSunk();
        return 'miss'

    };
    const getRandomCoordinates = () => {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const coordinatesFound = hitsAndMisses
            .some((element) => element === `${x}${y}`);
        return {x, y, coordinatesFound}              
    }
    const getAttackLocation = (xy) => {
        const coordinateArray = xy.split('');
        const x = parseInt(coordinateArray[0], 10);
        const y = parseInt(coordinateArray[1], 10);
        const yArray = [...document.querySelectorAll(
            '.playerOneGameBoard .gameboardCoordinateY'
        )];
        const xArray = [...yArray[y].querySelectorAll(
            '.gameboardCoordinateX' 
        )];
        return xArray[x];
        }
    const getNearbyOpenSpaces = () => {
        const hitCoordinate = hitsAndMisses.at(-1);
        nearbyCenterCoordinate.push(hitCoordinate);
        const coordinateArray = hitCoordinate.split('');
        const nearbyCoordinatesArray = [];
        const x = parseInt(coordinateArray[0], 10);
        const y = parseInt(coordinateArray[1], 10);
        if (x + 1 < 10 && !hitsAndMisses.some((element) => element === `${x + 1}${y}`)) {
            const nearbyCoordinate = `${x + 1}${y}`;
            nearbyCoordinatesArray.push(nearbyCoordinate);
        }
        if (y + 1 < 10 && !hitsAndMisses.some((element) => element === `${x}${y + 1}`)) {
            const nearbyCoordinate = `${x}${y + 1}`;
            nearbyCoordinatesArray.push(nearbyCoordinate);
        }
        if (x - 1 > -1 && !hitsAndMisses.some((element) => element === `${x - 1}${y}`)) {
            const nearbyCoordinate = `${x - 1}${y}`;
            nearbyCoordinatesArray.push(nearbyCoordinate);
        }
        if (y - 1 > -1 && !hitsAndMisses.some((element) => element === `${x}${y - 1}`)) {
            const nearbyCoordinate = `${x}${y - 1}`
            nearbyCoordinatesArray.push(nearbyCoordinate);
        }
        return nearbyCoordinatesArray;
    }
    const createCoordinates = () => {
        if (lastMove === 'hit' && hits.length > 1) {
            console.log(lastMove, nearbyCoordinates.length === 0);
            const centerCoordinate = nearbyCenterCoordinate.at(-1)
            const centerCoordinateArray = centerCoordinate.split('');
            const centerCoordinateX = parseInt(centerCoordinateArray[0], 10);
            const centerCoordinateY = parseInt(centerCoordinateArray[1], 10);
            const hit = hitsAndMisses.at(-1);
            const hitArray = hit.split('');
            const hitX = parseInt(hitArray[0], 10);
            const hitY = parseInt(hitArray[1], 10);
            const previousHit = hits.at(-2);
            const previousHitArray = previousHit.split('');
            const previousHitX = parseInt(previousHitArray[0], 10);
            const previousHitY = parseInt(previousHitArray[1], 10);
            console.log(hit, previousHit);
            if ((hitX === previousHitX + 1 || hitX === centerCoordinateX + 1) && 
                !hitsAndMisses.some((element) => element === `${hitX + 1}${hitY}`) &&
                (hitX + 1) < 10) {
                    console.log(nearbyCoordinates);
                    const newNearbyArray = nearbyCoordinates
                        .filter((element) => element === `${centerCoordinateX - 1}${hitY}`);
                    console.log(newNearbyArray);
                    nearbyCoordinates = newNearbyArray;
                    const attack = receiveAttack(`${hitX + 1}${hitY}`);
                    const location = getAttackLocation(`${hitX + 1}${hitY}`);
                    location.classList.toggle(attack);
                    return true
            }
            if ((hitX === previousHitX - 1 || hitX === centerCoordinateX - 1) && 
                !hitsAndMisses.some((element) => element === `${hitX - 1}${hitY}`) &&
                (hitX - 1) > -1) {
                    console.log(nearbyCoordinates);
                    const newNearbyArray = nearbyCoordinates
                        .filter((element) => element === `${centerCoordinateX + 1}${hitY}`);
                    console.log(newNearbyArray);
                    nearbyCoordinates = newNearbyArray;
                    const attack = receiveAttack(`${hitX - 1}${hitY}`);
                    const location = getAttackLocation(`${hitX - 1}${hitY}`);
                    location.classList.toggle(attack);
                    return true
            }
            if ((hitY === previousHitY + 1 || hitY === centerCoordinateY + 1) && 
                !hitsAndMisses.some((element) => element === `${hitX}${hitY + 1}`) &&
                (hitY + 1) < 10) {
                    console.log(nearbyCoordinates);
                    const newNearbyArray = nearbyCoordinates
                        .filter((element) => element === `${hitX}${centerCoordinateY - 1}`);
                    nearbyCoordinates = newNearbyArray;
                    console.log(newNearbyArray);
                    const attack = receiveAttack(`${hitX}${hitY + 1}`);
                    const location = getAttackLocation(`${hitX}${hitY + 1}`);
                    location.classList.toggle(attack);
                    return true
            }
            if ((hitY === previousHitY - 1 || hitY === centerCoordinateY - 1) && 
                !hitsAndMisses.some((element) => element === `${hitX}${hitY - 1}`) &&
                (hitY - 1) > -1) {
                    console.log(nearbyCoordinates);
                    const newNearbyArray = nearbyCoordinates
                        .filter((element) => element === `${hitX}${centerCoordinateY + 1}`);
                    console.log(newNearbyArray);
                    nearbyCoordinates = newNearbyArray;
                    const attack = receiveAttack(`${hitX}${hitY - 1}`);
                    const location = getAttackLocation(`${hitX}${hitY - 1}`);
                    location.classList.toggle(attack);
                    return true
            }            
        }
        if (lastMove === 'hit' && nearbyCoordinates.length === 0) {
            nearbyCoordinates = getNearbyOpenSpaces()
            console.log(nearbyCoordinates);
        }          
        if (nearbyCoordinates.length > 0) {
            const getRandomIndex = Math.floor(Math.random() * nearbyCoordinates.length);
            const attack = receiveAttack(nearbyCoordinates[getRandomIndex]);
            const location = getAttackLocation(nearbyCoordinates[getRandomIndex]);
            location.classList.toggle(attack);
            nearbyCoordinates.splice(getRandomIndex, 1);
            return true
        }
       
        const coordinates = getRandomCoordinates();
        let {x} = coordinates
        let {y} = coordinates
        let {coordinatesFound} = coordinates
        while (coordinatesFound) {
            const newCoordinates = getRandomCoordinates();
            x = newCoordinates.x
            y = newCoordinates.y
            coordinatesFound = newCoordinates.coordinatesFound
        }
        console.log(`${x}${y}`)
        const attack = receiveAttack(`${x}${y}`);
        const location = getAttackLocation(`${x}${y}`);
        location.classList.toggle(attack);
        console.log(nearbyCoordinates);
        return true
    };
    const createShipCoordinates = (length) => {
        const rotateChoice = Math.floor(Math.random() * 2);
        const rotated = rotateChoice === 1;
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const trailingCoordinateArray = [`${x}${y}`];
        let coordinateFound = false;
            if (rotated) {
                coordinateFound = y > length;
                let nextY = y
                for (let i = 0; i < length - 1; i++) {
                    nextY += 1;
                    trailingCoordinateArray.push(`${x}${nextY}`)                
                }
            }
            if (!rotated) {
                coordinateFound = x > length;
                let nextX = x
                for (let i = 0; i < length - 1; i++) {
                    nextX += 1;
                    trailingCoordinateArray.push(`${nextX}${y}`)
                }
            }
        if (!coordinateFound) {
            const compareArrays = trailingCoordinateArray
                .filter((element) => allShipsCoordinates.includes(element));
            if (compareArrays.length > 0) {
                coordinateFound = true;
            }
        }
        return {trailingCoordinateArray, coordinateFound, rotated, length}
    }
    const checkRandomShipCoordinates = (length) => {
        const randomCoordinates = createShipCoordinates(length);
        let coordinateArray = randomCoordinates.trailingCoordinateArray;            
        while (randomCoordinates.coordinateFound) {
            const newRandomCoordinates = createShipCoordinates(length);
            randomCoordinates.coordinateFound = newRandomCoordinates.coordinateFound;
            coordinateArray = newRandomCoordinates.trailingCoordinateArray;
        }
        allShipsCoordinates = [...allShipsCoordinates,...coordinateArray];
    }
    const addNewShip = (ship) => {
        allShips.push(ship);
    }   
    return {
        playerName,
        allShips,
        allShipsCoordinates,
        hitsAndMisses,
        allShipsSunk,
        lastMove,
        addNewShip,
        receiveAttack,
        createCoordinates,
        checkRandomShipCoordinates,
        updatePlayerName
    }
}