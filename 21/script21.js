let image = document.createElement('img');
    image.src = deckOfCards[0].image;
    document.querySelector('.dealerHand').append(image);

let imageBack = document.createElement('img');
    imageBack.src = 'images/back.png'
    document.querySelector('.dealerHand').append(imageBack);
