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

    humanScore == 10 ? getFinalResult.textContent = 'Winner Winner Chiken Dinner!' : null;
    machineScore == 10 ? getFinalResult.textContent = 'You lost, human!' : null;
}

