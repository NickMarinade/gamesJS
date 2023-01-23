
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

let betButton = document.querySelector('#betButton');
let betInput = document.querySelector('.input');

let finalBalance = document.querySelector('.balance');

let number = 0;

betButton.addEventListener('click', () => {
    let inputValue = document.querySelector('.input').value;

    number = inputValue;

})

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
        sum += number*1.5;
        finalBalance.innerHTML = `${sum}`;
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
        sum -= number;
        finalBalance.innerHTML = `${sum}`;
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
                sum += number*2;
                finalBalance.innerHTML = `${sum}`
            } else {
                if (dlrPoint > plrPoint) {
                    gameOver.innerHTML = 'Dealer win! Game over!';
                    sum -= number;
                    finalBalance.innerHTML = `${sum}`
                } else if (dlrPoint == plrPoint) {
                    gameOver.innerHTML = "It's a tie!";
                    sum -= number;
                    finalBalance.innerHTML = `${sum}` 
                } else {
                    gameOver.innerHTML = 'You win! Game over!';
                    sum += number*2;
                    finalBalance.innerHTML = `${sum}`
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
                sum -= number;
                finalBalance.innerHTML = `${sum}` 
            } else {
                gameOver.innerHTML = 'Dealer bust! You win! Game over!';
                sum += number*2;
                finalBalance.innerHTML = `${sum}`
            }
        } else if (dlrPoint == plrPoint) {
            gameOver.innerHTML = "It's a tie!";
            sum -= number;
            finalBalance.innerHTML = `${sum}`
        } else {
            gameOver.innerHTML = 'You win! Game over!';
            sum += number*2;
            finalBalance.innerHTML = `${sum}`
        }

        dealerPoints.innerHTML = dlrPoint;
    }
});

resetButton.addEventListener('click', ()=> {
    dealerArr = [];
    playerArr = [];
    dlrPoint = [];
    plrPoint = [];
    dealerPoints.innerHTML = '';
    playerPoints.innerHTML = '';
    imageDealer.innerHTML = '';
    imagePlayer.innerHTML = '';
    gameOver.innerHTML = '';

    inputValue = '';
    finalBalance.innerHTML = `${sum}`;

    dealButton.removeAttribute('disabled');
    hitButton.removeAttribute('disabled');
});

