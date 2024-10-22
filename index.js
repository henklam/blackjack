// Build a BlackJack Game

var firstCard = 10;
var secondCard = 4;
var cards = [];
var isAlive = false;
var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("cards-el");
var previousEl = document.getElementById("previous-el");
if(localStorage.getItem("previous")==null) {
    var previous = [];
} else {
    var previous = JSON.parse(localStorage.getItem("previous"));
    printPrev();
}


function renderGame() {
    var sum = 0;
    if(isAlive) {
        for(let i = 0; i < cards.length; i++) {
            sum+=cards[i];
            cardsEl.innerHTML += cards[i] + " ";
        }
        sumEl.innerHTML = "Sum: " + sum;
        if(sum > 21) {
            messageEl.innerHTML = "You are out of the game";
            isAlive = false;
            previous.push(sum);
            localStorage.setItem("previous", JSON.stringify(previous));
            printPrev();

        } else if(sum == 21){
            messageEl.innerHTML = "You got blackjack";
            isAlive = false;
            previous.push(sum);
            localStorage.setItem("previous", JSON.stringify(previous));
            printPrev();
        } else {
            messageEl.innerHTML = "Do you want to draw a new card?";
            isAlive = true;
        }
    }
}

function printPrev() {
    previousEl.innerHTML = "Previous scores: ";
    for(let i = 0; i < previous.length; i++) {
        previousEl.innerHTML += previous[i] + " ";
    }
}

function newCard() {
    var card = getRandomCard();
    cards.push(card);
    if(isAlive) {
        cardsEl.innerHTML = "Cards: "
    }
    renderGame();
}

function startGame() {
    if(isAlive == false) {
        sumEl.innerHTML = "Sum: "
        cardsEl.innerHTML = "Cards: ";
        printPrev();
        cards = [];
        isAlive = true;
        let rand1 = getRandomCard();
        let rand2 = getRandomCard();
        firstCard = rand1;
        secondCard = rand2;
        cards.push(firstCard);
        cards.push(secondCard);
        renderGame();
    } else {
        messageEl.innerHTML = "The game has started";
    }
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