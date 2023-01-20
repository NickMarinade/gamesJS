// let image = document.createElement('img');
//     image.src = deckOfCards[0].image;
//     document.querySelector('.dealerHand').append(image);

// let imageBack = document.createElement('img');
//     imageBack.src = 'images/back.png'
//     document.querySelector('.dealerHand').append(imageBack);

let dealButton = document.querySelector('#dealButton');
let hitButton = document.querySelector('#hitButton');
let standButton = document.querySelector('#standButton');
let resetButton = document.querySelector('#resetButton');

let imageDealer = document.querySelector('.dealerHand');
let imagePlayer = document.querySelector('.playerHand');
let dealerPoints = document.querySelector('.dealerPoints');
let playerPoints = document.querySelector('.playerPoints');

let gameOver = document.querySelector('.gameOver');
let deck = deckOfCards;

let plrPoint = 0;
let dlrPoint = 0;
let sum = 0;

let dealerArr = [];
let playerArr = [];

dealButton.addEventListener('click', () => {
    for (let i = 0; i < 2; i++) {
        let randomCard = deck[Math.floor(Math.random()*deck.length)];
        let index = deck.findIndex(d => d === randomCard);
        deck.splice(index, 1);
        playerArr.push(randomCard); 

        let randomCard2 = deck[Math.floor(Math.random()*deck.length)];
        let index2 = deck.findIndex(d => d === randomCard2);
        deck.splice(index2, 1);
        dealerArr.push(randomCard2);
    }

    if (dealerArr.some(card => card.card === 'ace' )) {
        if(dealerArr[0].card === 'ace' && dealerArr[1].card !== 'ace') {
            dlrPoint = dealerArr[0].value2 + dealerArr[1].value;
        
        } else if (dealerArr[0].card !== 'ace' && dealerArr[1].card === 'ace') {
            dlrPoint = dealerArr[0].value + dealerArr[1].value2;
        
        } else {
            dlrPoint = dealerArr[0].value1 + dealerArr[1].value2;
        }

    } else {
        dlrPoint = dealerArr[0].value + dealerArr[1].value
    } 

    dealerPoints.innerHTML = dlrPoint;

    if (playerArr.some(card => card.card === 'ace' )) {
        if(playerArr[0].card === 'ace' && playerArr[1].card !== 'ace') {
            plrPoint = playerArr[0].value2 + playerArr[1].value;
        
        } else if (playerArr[0].card !== 'ace' && playerArr[1].card === 'ace') {
            plrPoint = playerArr[0].value + playerArr[1].value2;
        
        } else {
            plrPoint = playerArr[0].value1 + playerArr[1].value2;
        }

    } else {
        plrPoint = playerArr[0].value + playerArr[1].value
    } 

    playerPoints.innerHTML = plrPoint;


})

