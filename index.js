// Build a BlackJack Game

// variables representing two cards 
let firstCard = 10
let secondCard = 4
let cards = []
let hasBlackjack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

//challenge #1
//create a new variable and set it to the sum of the two cards 
let sum = firstCard + secondCard;

//chalenge #2 
// code the statements below based on the conditions shown in blackjack.png from the images folder
// your output should work in the browser's console based on changing the values assigned to the cards

//starter code
if(sum < 21) {
    message = "Do you want to draw a new card? 🙂"
} else if(sum == 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
} else {
    message = "You're out of the game! 😭"
}
console.log(message)


function renderGame() {
    let sum = 0;
    for(let i = 0; i < cards.length; i++) {
        sum+=cards[i];
        cardsEl.innerHTML += cards[i];
    }
    
}