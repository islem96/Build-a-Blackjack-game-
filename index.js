let min = 2
let max = 11
let cards = []
sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "islem",
    chips: 145
}
let playersEl = document.getElementById("player-el")
playersEl.textContent = player.name + ": $" + player.chips
function generateRandomIntegerInRange(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}
function startGame() {
    isAlive = true
    hasBlackjack = false
    cards = []
    let firstCard = generateRandomIntegerInRange(min, max)
    let secondCard = generateRandomIntegerInRange(min, max)
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {

    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackjack = true
        message = "You've got Blackjack!"
    } else {
        isAlive = false
        message = "You are out of the game!"
    }
    messageEl.textContent = message
}
function newCard() {
    if (isAlive === true && !hasBlackjack) {
        let card = generateRandomIntegerInRange(min, max)
        cards.push(card)
        sum += card
        renderGame()
    }

}
