export default function shipPlacement() {
    const aircraftCarrier = {
        name: 'aircraftCarrier',
        moved: false,
        rotated: false,
        sectionClicked: null,
        previousSectionClicked: null,
        previousXCoordinate: null,
        previousXindex: null,
        coordinateList: null
    }
    const battleship = {
        name: 'battleship',
        moved: false,
        rotated: false,
        sectionClicked: null,
        previousSectionClicked: null,
        previousXCoordinate: null,
        previousXindex: null        
    }
    const cruiser = {
        name: 'cruiser',
        moved: false,
        rotated: false,
        sectionClicked: null,
        previousSectionClicked: null,
        previousXCoordinate: null,
        previousXindex: null
    }
    const destroyer1 = {
        name: 'destroyer1',
        moved: false,
        rotated: false,
        sectionClicked: null,
        previousSectionClicked: null,
        previousXCoordinate: null,
        previousXindex: null        
    }
    const destroyer2 = {
        name: 'destroyer2',
        moved: false,
        rotated: false,
        sectionClicked: null,
        previousSectionClicked: null,
        previousXCoordinate: null,
        previousXindex: null        
    }
    const submarine1 = {
        name: 'submarine1',
        moved: false,
        rotated: false,
        sectionClicked: null,
        previousSectionClicked: null,
        previousXCoordinate: null,
        previousXindex: null        
    }
    const submarine2 = {
        name: 'submarine2',
        moved: false,
        rotated: false,
        sectionClicked: null,
        previousSectionClicked: null,
        previousXCoordinate: null,
        previousXindex: null        
    }
    let draggedShip = null;
    const rotateToggle = () => {
        document.querySelector('.rotateButton').removeEventListener('click', rotateToggle);
        const ships = [...document.querySelectorAll('.shipsContainer .shipSectionContainer')];
        const selectedShip = ships.findIndex((element) => element.classList.contains('selected'));
        if (selectedShip > -1) {
            if (ships[selectedShip].classList.contains('derotate')) {
                ships[selectedShip].classList.toggle('derotate');
            }
            if (ships[selectedShip].classList.contains('rotate')) {
                ships[selectedShip].classList.toggle('derotate');
            }

            ships[selectedShip].classList.toggle('rotate');
        }
    }    
    const finishRotate = (event) => {
        const { id } = event.target
        if (event.target.classList.contains('rotate')) {
            event.target.classList.toggle('rotate');
        }
        if (event.target.classList.contains('derotate')) {
            event.target.classList.toggle('derotate');
        }
        event.target.classList.toggle('finishRotate');
        if (id === 'aircraftCarrier') {
            aircraftCarrier.rotated = event.target.classList.contains('finishRotate');
        }
        if (id === 'battleship') {
            battleship.rotated = event.target.classList.contains('finishRotate');
        }
        if (id === 'cruiser') {
            cruiser.rotated = event.target.classList.contains('finishRotate');
        }
        if (id === 'destroyer1') {
            destroyer1.rotated = event.target.classList.contains('finishRotate');
        }
        if (id === 'destroyer2') {
            destroyer2.rotated = event.target.classList.contains('finishRotate');
        }
        if (id === 'submarine1') {
            submarine1.rotated = event.target.classList.contains('finishRotate');
        }
        if (id === 'submarine2') {
            submarine2.rotated = event.target.classList.contains('finishRotate')
        }
        document.querySelector('.rotateButton').addEventListener('click', rotateToggle);
    }
    const sectionToggle = (event) => {
        const {length} = [...event.target.children];
        const {classList} = event.target;
        const {id} = event.target;
        if (length === 5) {
            if (aircraftCarrier.moved) {
                if (aircraftCarrier.rotated) {
                    switch (true) {
                        case classList.contains('rotateSection0'):
                            classList.remove('rotateSection0');
                            return classList.add(`rotateSection${aircraftCarrier.sectionClicked}`)
                        case classList.contains('rotateSection1'):
                            classList.remove('rotateSection1');
                            return classList.add(`rotateSection${aircraftCarrier.sectionClicked}`)
                        case classList.contains('rotateSection2'):
                            classList.remove('rotateSection2');
                            return classList.add(`rotateSection${aircraftCarrier.sectionClicked}`)
                        case classList.contains('rotateSection3'):
                            classList.remove('rotateSection3');
                            return classList.add(`rotateSection${aircraftCarrier.sectionClicked}`)
                        case classList.contains('rotateSection4'):
                            classList.remove('rotateSection4');
                            return classList.add(`rotateSection${aircraftCarrier.sectionClicked}`)
                        default:
                            return classList.add(`rotateSection${aircraftCarrier.sectionClicked}`)
                    }                    
                }
                switch (true) {
                    case classList.contains('section0'):
                        classList.remove('section0');
                        return classList.add(`section${aircraftCarrier.sectionClicked}`)
                    case classList.contains('section1'):
                        classList.remove('section1');
                        return classList.add(`section${aircraftCarrier.sectionClicked}`)
                    case classList.contains('section2'):
                        classList.remove('section2');
                        return classList.add(`section${aircraftCarrier.sectionClicked}`)
                    case classList.contains('section3'):
                        classList.remove('section3');
                        return classList.add(`section${aircraftCarrier.sectionClicked}`)
                    case classList.contains('section4'):
                        classList.remove('section4');
                        return classList.add(`section${aircraftCarrier.sectionClicked}`)
                    default:
                        return classList.add(`section${aircraftCarrier.sectionClicked}`)
                }                
            }
        }
        if (length === 4) {
            if (battleship.moved) {
                if (battleship.rotated) {
                    switch (true) {
                        case classList.contains('rotateSection0'):
                            classList.remove('rotateSection0');
                            return classList.add(`rotateSection${battleship.sectionClicked}`)
                        case classList.contains('rotateSection1'):
                            classList.remove('rotateSection1');
                            return classList.add(`rotateSection${battleship.sectionClicked}`)
                        case classList.contains('rotateSection2'):
                            classList.remove('rotateSection2');
                            return classList.add(`rotateSection${battleship.sectionClicked}`)
                        case classList.contains('rotateSection3'):
                            classList.remove('rotateSection3');
                            return classList.add(`rotateSection${battleship.sectionClicked}`)
                        default:
                            return classList.add(`rotateSection${battleship.sectionClicked}`)
                    }                    
                }
                switch (true) {
                    case classList.contains('section0'):
                        classList.remove('section0');
                        return classList.add(`section${battleship.sectionClicked}`)
                    case classList.contains('section1'):
                        classList.remove('section1');
                        return classList.add(`section${battleship.sectionClicked}`)
                    case classList.contains('section2'):
                        classList.remove('section2');
                        return classList.add(`section${battleship.sectionClicked}`)
                    case classList.contains('section3'):
                        classList.remove('section3');
                        return classList.add(`section${battleship.sectionClicked}`)
                    default:
                        return classList.add(`section${battleship.sectionClicked}`)
                }                 
            } 
        }
        if (length === 3) {
            if (cruiser.moved) {
                if (cruiser.rotated) {
                    switch (true) {
                        case classList.contains('rotateSection0'):
                            classList.remove('rotateSection0');
                            return classList.add(`rotateSection${cruiser.sectionClicked}`)
                        case classList.contains('rotateSection1'):
                            classList.remove('rotateSection1');
                            return classList.add(`rotateSection${cruiser.sectionClicked}`)
                        case classList.contains('rotateSection2'):
                            classList.remove('rotateSection2');
                            return classList.add(`rotateSection${cruiser.sectionClicked}`)
                        default:
                            return classList.add(`rotateSection${cruiser.sectionClicked}`)
                    }                    
                }
                switch (true) {
                    case classList.contains('section0'):
                        classList.remove('section0');
                        return classList.add(`section${cruiser.sectionClicked}`)
                    case classList.contains('section1'):
                        classList.remove('section1');
                        return classList.add(`section${cruiser.sectionClicked}`)
                    case classList.contains('section2'):
                        classList.remove('section2');
                        return classList.add(`section${cruiser.sectionClicked}`)
                    default:
                        return classList.add(`section${cruiser.sectionClicked}`)
                }
            }  
        }
        if (length === 2) {
            let ship = destroyer2;
            if (id === 'destroyer1') ship = destroyer1;
            if (ship.moved) {
                if (ship.rotated) {
                    switch (true) {
                        case classList.contains('rotateSection0'):
                            classList.remove('rotateSection0');
                            return classList.add(`rotateSection${ship.sectionClicked}`)
                        case classList.contains('rotateSection1'):
                            classList.remove('rotateSection1');
                            return classList.add(`rotateSection${ship.sectionClicked}`)
                        default:
                            return classList.add(`rotateSection${ship.sectionClicked}`)
                    }                    
                }
                switch (true) {
                    case classList.contains('section0'):
                        classList.remove('section0');
                        return classList.add(`section${ship.sectionClicked}`)
                    case classList.contains('section1'):
                        classList.remove('section1');
                        return classList.add(`section${ship.sectionClicked}`)
                    default:
                        return classList.add(`section${ship.sectionClicked}`)
                }                 
            } 
        }
        return length
    }
    const allowDrop = (ev) => {
        ev.preventDefault();
        }
    const drag = (event) => {
        const { id } = event.target
        event.dataTransfer.setData("text", id);
        draggedShip = id;
        return true
    }
    const drop = (event) => {
        const data = event.dataTransfer.getData("text");
        const yId = event.target.parentElement.id;
        const xId = event.target.id
        const xindex = [...event.target.parentElement.children]
            .findIndex((element) => element === event.target);
        const xCoordinate = event.target;
        if (draggedShip === 'aircraftCarrier') {
            if (event.target.parentElement.classList.contains('shipSectionContainer')) {
                aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked
                return console.log('error');
            }
            if (aircraftCarrier.previousXCoordinate !== null) {
                aircraftCarrier.coordinateList
                    .forEach((element) => element.classList.toggle('occupied'));
            }            
            if (aircraftCarrier.sectionClicked === 0) {
                if (aircraftCarrier.rotated) {
                    if (xId === 'x6' || xId === 'x7' || xId === 'x8' || xId === 'x9') {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    const nextXCoordinate = event.target
                        .nextSibling;
                    const nextSecondXCoordinate = event.target
                        .nextSibling
                            .nextSibling;
                    const nextThirdXCoordinate = event.target
                        .nextSibling
                            .nextSibling
                                .nextSibling;
                    const nextForthXCoordinate = event.target
                        .nextSibling
                            .nextSibling
                                .nextSibling
                                    .nextSibling;
                    if (xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied') ||
                        nextThirdXCoordinate
                            .classList.contains('occupied') ||
                        nextForthXCoordinate
                            .classList.contains('occupied')) {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    nextThirdXCoordinate
                        .classList.toggle('occupied');
                    nextForthXCoordinate
                        .classList.toggle('occupied');
                    aircraftCarrier.coordinateList = [
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate, 
                        nextThirdXCoordinate,
                        nextForthXCoordinate
                    ];              
                }
                if (!aircraftCarrier.rotated) {
                    if (yId === 'y6' || yId === 'y7' || yId === 'y8' || yId === 'y9') {
                            aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                            return console.log('error');
                    }       
                    const nextXCoordinate = event.target.parentElement
                        .nextSibling
                            .children[xindex];
                    const nextSecondXCoordinate = event.target.parentElement
                        .nextSibling
                            .nextSibling
                                .children[xindex];
                    const nextThirdXCoordinate = event.target.parentElement
                        .nextSibling
                            .nextSibling
                                .nextSibling
                                    .children[xindex];
                    const nextForthXCoordinate = event.target.parentElement
                        .nextSibling
                            .nextSibling
                                .nextSibling
                                    .nextSibling
                                        .children[xindex];
                    if (xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied') ||
                        nextThirdXCoordinate
                            .classList.contains('occupied') ||
                        nextForthXCoordinate
                            .classList.contains('occupied')) {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    nextThirdXCoordinate
                        .classList.toggle('occupied');
                    nextForthXCoordinate
                        .classList.toggle('occupied');
                    aircraftCarrier.coordinateList = [
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate, 
                        nextThirdXCoordinate,
                        nextForthXCoordinate
                    ];
                }                    
            }     
            if (aircraftCarrier.sectionClicked === 1) {
                if (aircraftCarrier.rotated) {
                    if (xId === 'x0' || xId === 'x7' || xId === 'x8' || xId === 'x9') {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousXCoordinate = event.target
                        .previousSibling;
                    const nextXCoordinate = event.target
                        .nextSibling;
                    const nextSecondXCoordinate = event.target
                        .nextSibling
                            .nextSibling;
                    const nextThirdXCoordinate = event.target
                        .nextSibling
                            .nextSibling
                                .nextSibling;
                    if (previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied') ||
                        nextThirdXCoordinate
                            .classList.contains('occupied')) {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    nextThirdXCoordinate    
                        .classList.toggle('occupied');
                    aircraftCarrier.coordinateList = [
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate, 
                        nextThirdXCoordinate
                    ];      
                }
                if (!aircraftCarrier.rotated) {
                    if (yId === 'y0' || yId === 'y7' || yId === 'y8' || yId === 'y9') {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousXCoordinate = event.target.parentElement
                        .previousSibling
                            .children[xindex];
                    const nextXCoordinate = event.target.parentElement
                        .nextSibling
                            .children[xindex];
                    const nextSecondXCoordinate = event.target.parentElement
                        .nextSibling
                            .nextSibling
                                .children[xindex];
                    const nextThirdXCoordinate = event.target.parentElement
                        .nextSibling
                            .nextSibling
                                .nextSibling
                                    .children[xindex];
                    if (previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied') ||
                        nextThirdXCoordinate
                            .classList.contains('occupied')) {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }                    
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    nextThirdXCoordinate    
                        .classList.toggle('occupied');
                    aircraftCarrier.coordinateList = [
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate, 
                        nextThirdXCoordinate
                    ];                
                    }                    
                }
            if (aircraftCarrier.sectionClicked === 2) {
                if (aircraftCarrier.rotated) {
                    if (xId === 'x0' || xId === 'x1' || xId === 'x8' || xId === 'x9') {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousSecondXCoordinate = event.target
                        .previousSibling
                            .previousSibling;
                    const previousXCoordinate = event.target
                        .previousSibling;
                    const nextXCoordinate = event.target
                        .nextSibling;
                    const nextSecondXCoordinate = event.target
                        .nextSibling
                            .nextSibling;
                    if (previousSecondXCoordinate
                        .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied')) {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }  
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    aircraftCarrier.coordinateList = [
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate, 
                    ];                    
                }
                if (!aircraftCarrier.rotated) {
                    if (yId === 'y0' || yId === 'y1' || yId === 'y8' || yId === 'y9') {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousSecondXCoordinate = event.target.parentElement
                        .previousSibling
                            .previousSibling
                                .children[xindex];
                    const previousXCoordinate = event.target.parentElement
                        .previousSibling
                            .children[xindex];
                    const nextXCoordinate = event.target.parentElement
                        .nextSibling
                            .children[xindex];
                    const nextSecondXCoordinate = event.target.parentElement
                        .nextSibling
                            .nextSibling
                                .children[xindex];
                    if (previousSecondXCoordinate
                            .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied')) {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }  
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    aircraftCarrier.coordinateList = [
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate 
                    ];                
                    }                    
                }
            if (aircraftCarrier.sectionClicked === 3) {
                if (aircraftCarrier.rotated) {
                    if (xId === 'x0' || xId === 'x1' || xId === 'x2' || xId === 'x9') {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousThirdXCoordinate = event.target
                        .previousSibling
                            .previousSibling
                                .previousSibling;
                    const previousSecondXCoordinate = event.target
                        .previousSibling
                            .previousSibling;
                    const previousXCoordinate = event.target
                        .previousSibling;
                    const nextXCoordinate = event.target
                        .nextSibling; 
                    if (previousThirdXCoordinate
                            .classList.contains('occupied') ||
                        previousSecondXCoordinate
                            .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied')) {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    previousThirdXCoordinate
                        .classList.toggle('occupied');
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    aircraftCarrier.coordinateList = [
                        previousThirdXCoordinate,
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate
                    ];                                       
                }
                if (!aircraftCarrier.rotated) {
                    if (yId === 'y0' || yId === 'y1' || yId === 'y2' || yId === 'y9') {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousThirdXCoordinate = event.target.parentElement
                        .previousSibling
                            .previousSibling
                                .previousSibling
                                    .children[xindex];
                    const previousSecondXCoordinate = event.target.parentElement
                        .previousSibling
                            .previousSibling
                                .children[xindex];
                    const previousXCoordinate = event.target.parentElement
                        .previousSibling
                            .children[xindex];
                    const nextXCoordinate = event.target.parentElement
                        .nextSibling
                            .children[xindex];
                    if (previousThirdXCoordinate
                            .classList.contains('occupied') ||
                        previousSecondXCoordinate
                            .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied')) {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    previousThirdXCoordinate
                        .classList.toggle('occupied');
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    aircraftCarrier.coordinateList = [
                        previousThirdXCoordinate,
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate
                    ];                      
                }
            }
            if (aircraftCarrier.sectionClicked === 4) {
                if (aircraftCarrier.rotated) {
                    if (xId === 'x0' || xId === 'x1' || xId === 'x2' || xId === 'x3') {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousForthXCoordinate = event.target
                        .previousSibling
                            .previousSibling
                                .previousSibling
                                    .previousSibling
                    const previousThirdXCoordinate = event.target
                        .previousSibling
                            .previousSibling
                                .previousSibling;
                    const previousSecondXCoordinate = event.target
                        .previousSibling
                            .previousSibling;
                    const previousXCoordinate = event.target
                        .previousSibling;
                    if (previousForthXCoordinate
                            .classList.contains('occupied') ||
                        previousThirdXCoordinate
                            .classList.contains('occupied') ||
                        previousSecondXCoordinate
                            .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied')) {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }                    
                    previousForthXCoordinate
                        .classList.toggle('occupied');
                    previousThirdXCoordinate
                        .classList.toggle('occupied');
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    aircraftCarrier.coordinateList = [
                        previousForthXCoordinate,
                        previousThirdXCoordinate,
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate
                    ];                 
                }
                if (!aircraftCarrier.rotated) {
                    if (yId === 'y0' || yId === 'y1' || yId === 'y2' || yId === 'y3') {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousForthXCoordinate = event.target.parentElement
                        .previousSibling
                            .previousSibling
                                .previousSibling
                                    .previousSibling
                                        .children[xindex];
                    const previousThirdXCoordinate = event.target.parentElement
                        .previousSibling
                            .previousSibling
                                .previousSibling
                                    .children[xindex];
                    const previousSecondXCoordinate = event.target.parentElement
                        .previousSibling
                            .previousSibling
                                .children[xindex];
                    const previousXCoordinate = event.target.parentElement
                        .previousSibling
                            .children[xindex];               
                    if (previousForthXCoordinate
                            .classList.contains('occupied') ||
                        previousThirdXCoordinate
                            .classList.contains('occupied') ||
                        previousSecondXCoordinate
                            .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied')) {
                        aircraftCarrier.sectionClicked = aircraftCarrier.previousSectionClicked;
                        return console.log('error');
                    }                    
                    previousForthXCoordinate
                        .classList.toggle('occupied');
                    previousThirdXCoordinate
                        .classList.toggle('occupied');
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    aircraftCarrier.coordinateList = [
                        previousForthXCoordinate,
                        previousThirdXCoordinate,
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate
                    ];                      
                }
            }
            const aircraftCarrierButton = document.querySelector('#aircraftCarrierButton');
            if (!aircraftCarrierButton.classList.contains('placed')) {
                aircraftCarrierButton.classList.add('placed');
                aircraftCarrierButton.classList.remove('selected');
            }
            aircraftCarrier.previousSectionClicked = aircraftCarrier.sectionClicked;
            aircraftCarrier.previousXCoordinate = xCoordinate;
            aircraftCarrier.previousXindex = xindex;
            aircraftCarrier.moved = true;
        }
        if (draggedShip === 'battleship') {
            if (event.target.parentElement.classList.contains('shipSectionContainer')) {
                battleship.sectionClicked = battleship.previousSectionClicked
                return console.log('error');
            }
            if (battleship.previousXCoordinate !== null) {
                battleship.coordinateList
                    .forEach((element) => element.classList.toggle('occupied'));
            }            
            if (battleship.sectionClicked === 0) {
                if (battleship.rotated) {
                    if (xId === 'x7' || xId === 'x8' || xId === 'x9') {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    const nextXCoordinate = event.target
                        .nextSibling;
                    const nextSecondXCoordinate = event.target
                        .nextSibling
                            .nextSibling;
                    const nextThirdXCoordinate = event.target
                        .nextSibling
                            .nextSibling
                                .nextSibling;
                    if (xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied') ||
                        nextThirdXCoordinate
                            .classList.contains('occupied')) {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }                    
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    nextThirdXCoordinate
                        .classList.toggle('occupied');
                    battleship.coordinateList = [
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate, 
                        nextThirdXCoordinate
                    ];                                                            
                }
                if (!battleship.rotated) {
                    if (yId === 'y7' || yId === 'y8' || yId === 'y9') {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    const nextXCoordinate = event.target.parentElement
                        .nextSibling
                            .children[xindex];
                    const nextSecondXCoordinate = event.target.parentElement
                        .nextSibling
                            .nextSibling
                                .children[xindex];
                    const nextThirdXCoordinate = event.target.parentElement
                        .nextSibling
                            .nextSibling
                                .nextSibling
                                    .children[xindex];
                    if (xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied') ||
                        nextThirdXCoordinate
                            .classList.contains('occupied')) {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }                    
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    nextThirdXCoordinate
                        .classList.toggle('occupied');
                    battleship.coordinateList = [
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate, 
                        nextThirdXCoordinate
                    ];                     
                }
            }
            if (battleship.sectionClicked === 1) {
                if (battleship.rotated) {
                    if (xId === 'x0' || xId === 'x8' || xId === 'x9') {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousXCoordinate = event.target
                        .previousSibling;
                    const nextXCoordinate = event.target
                        .nextSibling;
                    const nextSecondXCoordinate = event.target
                        .nextSibling
                            .nextSibling;
                    if (previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied')) {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    battleship.coordinateList = [
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate
                    ];                                                            
                }
                if (!battleship.rotated) {
                    if (yId === 'y0' || yId === 'y8' || yId === 'y9') {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousXCoordinate = event.target.parentElement
                        .previousSibling
                            .children[xindex];
                    const nextXCoordinate = event.target.parentElement
                        .nextSibling
                            .children[xindex];
                    const nextSecondXCoordinate = event.target.parentElement
                        .nextSibling
                            .nextSibling
                                .children[xindex];
                    if (previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied')) {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    battleship.coordinateList = [
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate
                    ];                                        
                }
            }
            if (battleship.sectionClicked === 2) {
                if (battleship.rotated) {
                    if (xId === 'x0' || xId === 'x1' || xId === 'x9') {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousSecondXCoordinate = event.target
                        .previousSibling
                            .previousSibling;
                    const previousXCoordinate = event.target
                        .previousSibling;
                    const nextXCoordinate = event.target
                        .nextSibling;
                    if (previousSecondXCoordinate
                            .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied')) {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    battleship.coordinateList = [
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate
                    ];
                }
                if (!battleship.rotated) {
                    if (yId === 'y0' || yId === 'y1' || yId === 'y9') {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousSecondXCoordinate = event.target.parentElement
                        .previousSibling
                            .previousSibling
                                .children[xindex];
                    const previousXCoordinate = event.target.parentElement
                        .previousSibling
                            .children[xindex];
                    const nextXCoordinate = event.target.parentElement
                        .nextSibling
                            .children[xindex];
                    if (previousSecondXCoordinate
                            .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied')) {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    battleship.coordinateList = [
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate
                    ];                    
                }
            }
            if (battleship.sectionClicked === 3) {
                if (battleship.rotated) {
                    if (xId === 'x0' || xId === 'x1' || xId === 'x2') {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousThirdXCoordinate = event.target
                        .previousSibling
                            .previousSibling
                                .previousSibling;
                    const previousSecondXCoordinate = event.target
                        .previousSibling
                            .previousSibling;
                    const previousXCoordinate = event.target
                        .previousSibling;
                    if (previousThirdXCoordinate
                            .classList.contains('occupied') ||
                        previousSecondXCoordinate
                            .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied')) {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    previousThirdXCoordinate
                        .classList.toggle('occupied');
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    battleship.coordinateList = [
                        previousThirdXCoordinate,
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate
                    ];                                           
                }
                if (!battleship.rotated) {
                    if (yId === 'y0' || yId === 'y1' || yId === 'y2') {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousThirdXCoordinate = event.target.parentElement
                        .previousSibling
                            .previousSibling
                                .previousSibling
                                    .children[xindex];
                    const previousSecondXCoordinate = event.target.parentElement
                        .previousSibling
                            .previousSibling
                                .children[xindex];
                    const previousXCoordinate = event.target.parentElement
                        .previousSibling
                            .children[xindex];
                    if (previousThirdXCoordinate
                            .classList.contains('occupied') ||
                        previousSecondXCoordinate
                            .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied')) {
                        battleship.sectionClicked = battleship.previousSectionClicked;
                        return console.log('error');
                    }
                    previousThirdXCoordinate
                        .classList.toggle('occupied');
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    battleship.coordinateList = [
                        previousThirdXCoordinate,
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate
                    ];                    
                } 
            }
            const battleshipButton = document.querySelector('#battleshipButton');
            if (!battleshipButton.classList.contains('placed')) {
                battleshipButton.classList.add('placed');
                battleshipButton.classList.remove('selected');
            }
            battleship.previousSectionClicked = battleship.sectionClicked;
            battleship.previousXCoordinate = xCoordinate;
            battleship.previousXindex = xindex;
            battleship.moved = true;            
        }
        if (draggedShip === 'cruiser') {
            if (event.target.parentElement.classList.contains('shipSectionContainer')) {
                cruiser.sectionClicked = cruiser.previousSectionClicked
                return console.log('error');
            }
            if (cruiser.previousXCoordinate !== null) {
                cruiser.coordinateList
                    .forEach((element) => element.classList.toggle('occupied'));
            }            
            if (cruiser.sectionClicked === 0) {
                if (cruiser.rotated) {
                    if (xId === 'x8' || xId === 'x9') {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }
                    const nextXCoordinate = event.target
                        .nextSibling;
                    const nextSecondXCoordinate = event.target
                        .nextSibling
                            .nextSibling;
                    if (xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied')) {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }  
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    cruiser.coordinateList = [
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate
                    ];                    
                }
                if (!cruiser.rotated) {
                    if (yId === 'y8' || yId === 'y9') {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }
                    const nextXCoordinate = event.target.parentElement
                        .nextSibling
                            .children[xindex];
                    const nextSecondXCoordinate = event.target.parentElement
                        .nextSibling
                            .nextSibling
                                .children[xindex];
                    if (xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied') ||
                        nextSecondXCoordinate
                            .classList.contains('occupied')) {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }  
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    nextSecondXCoordinate
                        .classList.toggle('occupied');
                    cruiser.coordinateList = [
                        xCoordinate, 
                        nextXCoordinate, 
                        nextSecondXCoordinate
                    ];                      
                }
            }
            if (cruiser.sectionClicked === 1) {
                if (cruiser.rotated) {
                    if (xId === 'x0' || xId === 'x9') {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousXCoordinate = event.target
                        .previousSibling;
                    const nextXCoordinate = event.target
                        .nextSibling;
                    if (previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied')) {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }  
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    cruiser.coordinateList = [
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate
                    ];                    
                }
                if (!cruiser.rotated) {
                    if (yId === 'y0' || yId === 'y9') {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousXCoordinate = event.target.parentElement
                        .previousSibling
                            .children[xindex];
                    const nextXCoordinate = event.target.parentElement
                        .nextSibling
                            .children[xindex];
                    if (previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied')) {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }  
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied'); 
                    cruiser.coordinateList = [
                        previousXCoordinate,
                        xCoordinate, 
                        nextXCoordinate
                    ];                   
                }
            }
            if (cruiser.sectionClicked === 2) {
                if (cruiser.rotated) {
                    if (xId === 'x0' || xId === 'x1') {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousSecondXCoordinate = event.target
                        .previousSibling
                            .previousSibling;
                    const previousXCoordinate = event.target
                        .previousSibling;
                    if (previousSecondXCoordinate
                            .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied')) {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }  
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    cruiser.coordinateList = [
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate
                    ];  
                }
                if (!cruiser.rotated) {
                    if (yId === 'y0' || yId === 'y1') {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousSecondXCoordinate = event.target.parentElement
                        .previousSibling
                            .previousSibling
                                .children[xindex]; 
                    const previousXCoordinate = event.target.parentElement
                        .previousSibling
                            .children[xindex];               
                    if (previousSecondXCoordinate
                            .classList.contains('occupied') ||
                        previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied')) {
                        cruiser.sectionClicked = cruiser.previousSectionClicked;
                        return console.log('error');
                    }  
                    previousSecondXCoordinate
                        .classList.toggle('occupied');
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    cruiser.coordinateList = [
                        previousSecondXCoordinate,
                        previousXCoordinate,
                        xCoordinate
                    ];                     
                }   
            }
            const cruiserButton = document.querySelector('#cruiserButton');
            if (!cruiserButton.classList.contains('placed')) {
                cruiserButton.classList.add('placed');
                cruiserButton.classList.remove('selected');
            }
            cruiser.previousSectionClicked = cruiser.sectionClicked;
            cruiser.previousXCoordinate = xCoordinate;
            cruiser.previousXindex = xindex;
            cruiser.moved = true;
        }
        if (draggedShip === 'destroyer1' || draggedShip === 'destroyer2') {
            let ship = destroyer1;
            if (draggedShip === 'destroyer2') {
                ship = destroyer2;
            }
            if (event.target.parentElement.classList.contains('shipSectionContainer')) {
                ship.sectionClicked = ship.previousSectionClicked
                return console.log('error');
            }
            if (ship.previousXCoordinate !== null) {
                ship.coordinateList
                    .forEach((element) => element.classList.toggle('occupied'));
            }            
            if (ship.sectionClicked === 0) {
                if (ship.rotated) {
                    if (xId === 'x9') {
                        ship.sectionClicked = ship.previousSectionClicked;
                        return console.log('error');
                    }
                    const nextXCoordinate = event.target
                        .nextSibling;
                    if (xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied')) {
                        ship.sectionClicked = ship.previousSectionClicked;
                        return console.log('error');
                    }  
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    ship.coordinateList = [
                        xCoordinate,
                        nextXCoordinate
                    ];                     
                }
                if (!ship.rotated) {
                    if (yId === 'y9') {
                        ship.sectionClicked = ship.previousSectionClicked;
                        return console.log('error');
                    }
                    const nextXCoordinate = event.target.parentElement
                        .nextSibling
                            .children[xindex];
                    if (xCoordinate
                            .classList.contains('occupied') ||
                        nextXCoordinate
                            .classList.contains('occupied')) {
                        ship.sectionClicked = ship.previousSectionClicked;
                        return console.log('error');
                    }  
                    xCoordinate
                        .classList.toggle('occupied');
                    nextXCoordinate
                        .classList.toggle('occupied');
                    ship.coordinateList = [
                        xCoordinate,
                        nextXCoordinate
                    ];                     
                }
            }
            if (ship.sectionClicked === 1) {
                if (ship.rotated) {
                    if (xId === 'x0') {
                        ship.sectionClicked = ship.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousXCoordinate = event.target
                        .previousSibling;
                    if (previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied')) {
                        ship.sectionClicked = ship.previousSectionClicked;
                        return console.log('error');
                    } 
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    ship.coordinateList = [
                        previousXCoordinate,
                        xCoordinate
                    ];
                }
                if (!ship.rotated) {
                    if (yId === 'y0') {
                        ship.sectionClicked = ship.previousSectionClicked;
                        return console.log('error');
                    }
                    const previousXCoordinate = event.target.parentElement
                        .previousSibling
                            .children[xindex];                
                    if (previousXCoordinate
                            .classList.contains('occupied') ||
                        xCoordinate
                            .classList.contains('occupied')) {
                        ship.sectionClicked = ship.previousSectionClicked;
                        return console.log('error');
                    } 
                    previousXCoordinate
                        .classList.toggle('occupied');
                    xCoordinate
                        .classList.toggle('occupied');
                    ship.coordinateList = [
                        previousXCoordinate,
                        xCoordinate
                    ];                       
                }
            }
            const destroyer = document.querySelector(`#${draggedShip}Button`);
            if (!destroyer.classList.contains('placed')) {
                destroyer.classList.add('placed');
                destroyer.classList.remove('selected');
            }
            ship.previousSectionClicked = ship.sectionClicked;
            ship.previousXCoordinate = xCoordinate;
            ship.previousXindex = xindex;
            ship.moved = true;           
        }
        if (draggedShip === 'submarine1' || draggedShip === 'submarine2') {
            let ship = submarine1;
            if (draggedShip === 'submarine2') {
                ship = submarine2;
            }
            if (event.target.parentElement.classList.contains('shipSectionContainer')) {
                return console.log('error');
            }
            if (xCoordinate.classList.contains('occupied')) {
                return console.log('error');
            }
            xCoordinate.classList.toggle('occupied');
            if (ship.previousXCoordinate !== null) {
                ship.previousXCoordinate.classList.toggle('occupied');
            }
            const submarine = document.querySelector(`#${draggedShip}Button`);
            if (!submarine.classList.contains('placed')) {
                submarine.classList.add('placed');
                submarine.classList.remove('selected');
            }
            ship.previousXCoordinate = xCoordinate;
            ship.previousXindex = xindex;
            ship.coordinateList = [
                xCoordinate
            ];
        }
        event.preventDefault();
        event.target.appendChild(document.getElementById(data));
        const ships = [...document.querySelectorAll('.shipsContainer .shipSectionContainer')];
        if (ships.length === 0) {
            document.querySelector('.shipSelectionContainer').classList.toggle('selected');
            document.querySelector('.startGameButtonContainer').classList.toggle('selected');            
        }
        if (ships.length > 0 && !ships.some((element) => element.classList.contains('selected'))) {
            const shipButton = document.querySelector(`#${ships[0].id}Button`);
            const shipSelectionTitle = document.querySelector('.shipSelectionTitle');
            if (ships[0].id === 'aircraftCarrier') {
                shipSelectionTitle.innerText = 'Place your Aircraft Carrier'
            }
            if (ships[0].id === 'battleship') {
                shipSelectionTitle.innerText = 'Place your Battleship'
            }
            if (ships[0].id === 'cruiser') {
                shipSelectionTitle.innerText = 'Place your Cruiser'
            }
            if (ships[0].id === 'destroyer1') {
                shipSelectionTitle.innerText = 'Place your first Destroyer'
            }
            if (ships[0].id === 'destroyer2') {
                shipSelectionTitle.innerText = 'Place your second Destroyer'
            }
            if (ships[0].id === 'submarine1') {
                shipSelectionTitle.innerText = 'Place your first Submarine'
            }
            if (ships[0].id === 'submarine2') {
                shipSelectionTitle.innerText = 'Place your second Submarine'
            }
            ships[0].classList.toggle('selected');
            shipButton.classList.toggle('selected');
        }
        return true
    }    
    const shipSectionAdjustment = (event) => {
        const myParent = event.target.parentElement;
        const {id} = myParent
        const sectionIndex = [...myParent.children]
            .findIndex((element) => element === event.target);
        let ship = destroyer1;
        switch (true) {
            case id === 'aircraftCarrier':
                aircraftCarrier.sectionClicked = sectionIndex;
                aircraftCarrier.moved = false;
                break;
            case id === 'battleship':
                battleship.sectionClicked = sectionIndex;
                battleship.moved = false;
                break;
            case id === 'cruiser':
                cruiser.sectionClicked = sectionIndex;
                cruiser.moved = false;
                break;
            case id === 'destroyer1' || id === 'destroyer2':
                if (id === 'destroyer2') ship = destroyer2;
                ship.sectionClicked = sectionIndex;
                ship.moved = false;
                break;
        default:
        }
    }
    const shipSelectionSwitch = (event) => {
        const { id } = event.target;
        const ships = [...document.querySelectorAll('.shipsContainer .shipSectionContainer')]
        const shipButtons = [...document.querySelectorAll('.shipButton')];
        const selectedButton = shipButtons
            .findIndex((element) => element.classList.contains('selected'));
        const findSelected = ships
            .findIndex((element) => element.classList.contains('selected'));
        if (findSelected > -1) {
            ships[findSelected].classList.toggle('selected');
        }
        if (selectedButton > -1) {
            shipButtons[selectedButton].classList.toggle('selected');
        }
        if (id === 'aircraftCarrierButton') {
            document.getElementById('aircraftCarrier').classList.toggle('selected');
            document.querySelector('.shipSelectionTitle')
                .innerText = 'Place your Aircraft Carrier'
        }
        if (id === 'battleshipButton') {
            document.getElementById('battleship').classList.toggle('selected');
            document.querySelector('.shipSelectionTitle')
                .innerText = 'Place your Battleship'
        }
        if (id === 'cruiserButton') {
            document.getElementById('cruiser').classList.toggle('selected');
            document.querySelector('.shipSelectionTitle')
                .innerText = 'Place your Cruiser'
        }
        if (id === 'destroyer1Button') {
            document.getElementById('destroyer1').classList.toggle('selected');
            document.querySelector('.shipSelectionTitle')
                .innerText = 'Place your first Destroyer'
        }
        if (id === 'destroyer2Button') {
            document.getElementById('destroyer2').classList.toggle('selected');
            document.querySelector('.shipSelectionTitle')
                .innerText = 'Place your second Destroyer'
        }
        if (id === 'submarine1Button') {
            document.getElementById('submarine1').classList.toggle('selected');
            document.querySelector('.shipSelectionTitle')
                .innerText = 'Place your first Submarine'
        }
        if (id === 'submarine2Button') {
            document.getElementById('submarine2').classList.toggle('selected');
            document.querySelector('.shipSelectionTitle')
                .innerText = 'Place your second Submarine'
        }
        event.target.classList.toggle('selected');
    }
    return {
        aircraftCarrier,
        battleship,
        cruiser,
        destroyer1,
        destroyer2,
        submarine1,
        submarine2, 
        allowDrop, 
        drag, 
        drop, 
        shipSectionAdjustment, 
        sectionToggle,
        rotateToggle,
        shipSelectionSwitch,
        finishRotate 
    }
}