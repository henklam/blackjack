// Build a BlackJack Game

var firstCard = 10;
var secondCard = 4;
var hasBlackjack = false;
var isAlive = true;
var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("cards-el");

var sum = firstCard + secondCard;

function renderGame() {
    if(isAlive == true) {
        for(let i = 0; i < cards.length; i++) {
            sum+=cards[i];
            cardsEl.innerHTML += cards[i] + " ";
        }
        sumEl.innerHTML = "Sum: " + sum;
        if(sum > 21) {
            isAlive = false;
        } else if(sum == 21){
            isAlive = true;
        } else {
            isAlive = true;
        }
    }
}

function newCard() {
    var card = getRandomCard();
    cards.push(card);
    renderGame();
}

function startGame() {
    var cards = [];
    isAlive = true;
    let rand1 = getRandomCard();
    let rand2 = getRandomCard();
    firstCard = rand1;
    secondCard = rand2;
    cards = [firstCard, secondCard];
    renderGame();
}

function getRandomCard() {
    var randomNumber = Math.floor(Math.random()*13)+1;
    if(randomNumber == 1) {
        return 11;
    } else if(randomNumber > 9) {
        return 10;
    }
    return randomNumber;
}