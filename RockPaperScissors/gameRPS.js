let getMainDiv = document.querySelector('.main');

let getSigns = getMainDiv.querySelectorAll('.box');

let signsArray = ['rock', 'paper', 'scissors'];

let humanScore;
let machineScore;
humanScore = machineScore = 0;

let getHumanScore = getMainDiv.querySelector('.humanScore');
let getMachineScore = getMainDiv.querySelector('.machineScore');

let getFinalResult = getMainDiv.querySelector('.finalResult');

let getChoiceTexts = getMainDiv.querySelectorAll('.choiceText');
let humanChoiceText = getMainDiv.querySelector('.choiceTextHuman');
let machineChoiceText = getMainDiv.querySelector('.choiceTextMachine'); 

let getPlayAgainButton = getMainDiv.querySelector('.button');

getPlayAgainButton.addEventListener('click', resetGame);

function resetGame() {
    humanScore = 0;
    machineScore = 0;
    getHumanScore.textContent = '0';
    getMachineScore.textContent = '0';

    getFinalResult.classList.remove('isVisible');
    humanChoiceText.classList.remove('isVisible');
    machineChoiceText.classList.remove('isVisible');

    for(let sign of getSigns) {
        sign.classList.remove('isInactive');
    }
}

for (let sign of getSigns) {
    sign.addEventListener('click', makeMove);
}

function makeMove() {
    let humanPick = this.dataset.sign;
    let randomNumberFromZeroToTwo = Math.floor(Math.random() * 3);
    let machinePick = signsArray[randomNumberFromZeroToTwo];

    let getMoveResult = moveResult (humanPick, machinePick);
    updateBoard(getMoveResult, humanPick, machinePick);
}

function moveResult(human, machine) {
    if (human == machine)
    return 'tie';

    if (human == 'rock') {
        if (machine == 'paper')
        return 'machine';
        else return 'human';
    }

    if (human == 'paper') {
        if (machine == 'scissors')
        return 'machine';
        else return 'human';
    }

    if (human == 'scissors') {
        if (machine == 'rock')
        return 'machine';
        else return 'human';
    }
}


function updateBoard(moveResult, humanPick, machinePick) {
    for(let text of getChoiceTexts) {
        text.classList.add('isVisible');
    }

     humanChoiceText.textContent = humanPick;
     machineChoiceText.textContent = machinePick;

    moveResult == 'human' ? humanScore++ : null;
    moveResult == 'machine' ? machineScore++ : null;

    getHumanScore.textContent = humanScore;
    getMachineScore.textContent = machineScore;
    
    humanScore == 3 ? getFinalResult.textContent = 'Winner Winner Chiken Dinner!' : null;
    machineScore == 3 ? getFinalResult.textContent = 'You Lost, human!' : null;
    
    if(machineScore === 3) {
        getFinalResult.style.color = 'red';
    } else {
        getFinalResult.style.color = 'rgb(93, 193, 93)';
    }

    if(humanScore == 3 || machineScore == 3) {
        getFinalResult.classList.add('isVisible');

        for(let sign of getSigns) {
            sign.classList.add('isInactive');
        }
    }
}

