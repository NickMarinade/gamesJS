// let image = document.createElement('img');
//     image.src = deckOfCards[0].image;
//     document.querySelector('.dealerHand').append(image);

// let imageBack = document.createElement('img');
//     imageBack.src = 'images/back.png'
//     document.querySelector('.dealerHand').append(imageBack);

const audio = new Audio("shuffling-cards-6.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

let dealerBack = {"image": 'images/back.png' };
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

    // dealerPoints.innerHTML = dlrPoint;

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

    imageDealer.innerHTML += `<img src="${dealerArr[0].image}" alt=""></img>`;
    imageDealer.innerHTML += `<img src="${dealerBack.image}" alt=""></img>`;

    for (let i=0; i < playerArr.length; i++ ) {
        imagePlayer.innerHTML += `<img src="${playerArr[i].image}" alt=""></img>`
    }


    if(plrPoint === 21) {
        gameOver.innerHTML = '21, you win! Game is over!';
    }
});


hitButton.addEventListener('click', () => {

    let randomCard = deck[Math.floor(Math.random()*deck.length)];
    let index = deck.findIndex(d => d===randomCard)
    deck.splice(index,1);
    playerArr.push(randomCard);
    
    for (let i= (playerArr.length -1); i < playerArr.length; i++){
        imagePlayer.innerHTML += `<img src="${playerArr[i].image}" alt=""></img>`
    
        if (playerArr[i].card == 'ace'){
            if (plrPoint <= 10){
                plrPoint+= playerArr[i].value2;
            } else {
                plrPoint+= playerArr[i].value1;
            }
        } else {
            plrPoint+= playerArr[i].value;
        }
        playerPoints.innerHTML=plrPoint
       }
    
       if (plrPoint > 21){
        gameOver.innerHTML = "You bust! Game is over. You lost!"
       }
});



standButton.addEventListener('click', () => {
    dealButton.setAttribute("disabled", "");
    hitButton.setAttribute("disabled", "");
    
    if (dlrPoint <= 16) {
        let randomCard = deck[Math.floor(Math.random()*deck.length)];
        let index = deck.findIndex(d => d===randomCard)
        deck.splice(index,1);
        dealerArr.push(randomCard);

        imageDealer.innerHTML = '';
        for (let i=0; i < dealerArr.length; i++){

            imageDealer.innerHTML += `<img src='${dealerArr[i].image}' alt=''></img>`};

            for (let i=2; i < dealerArr.length; i++){
                if (dealerArr[i].card == 'ace') {
                    if (dlrPoint <= 10) {
                        dlrPoint += dealerArr[i].value2;
                    } else {
                        dlrPoint += dealerArr[i].value1;
                    }
                } else {
                    dlrPoint += dealerArr[i].value;
                }   
            }

            dealerPoints.innerHTML = dlrPoint;
            if (dlrPoint > 21) {
                gameOver.innerHTML = 'Dealer bust! You win! Game over!';
            } else {
                if (dlrPoint > plrPoint) {
                    gameOver.innerHTML = 'Dealer win! Game over!';
                } else if (dlrPoint == plrPoint) {
                    gameOver.innerHTML = "It's a tie!";
                } else {
                    gameOver.innerHTML = 'You win! Game over!';
                }
            }
    } else {
        imageDealer.innerHTML = '';
        for (let i=0; i < dealerArr.length; i++) {
            imageDealer.innerHTML += `<img src="${dealerArr[i].image}" alt=""></img>`
        }

        if (dlrPoint > plrPoint) {
            if (dlrPoint <= 21) {
                gameOver.innerHTML = 'Dealer win! Game over!'; 
            } else {
                gameOver.innerHTML = 'Dealer bust! You win! Game over!';
            }
        } else if (dlrPoint == plrPoint) {
            gameOver.innerHTML = "It's a tie!";
        } else {
            gameOver.innerHTML = 'You win! Game over!';
        }

        dealerPoints.innerHTML = dlrPoint;
    }
});

