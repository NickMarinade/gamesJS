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
        console.log(dealerArr, playerArr);
    }
})

