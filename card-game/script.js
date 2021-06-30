import Deck from "./deck.js"

//the value map is for winner comparison
const CARD_VALUE_MAP = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

// get all the elements by querySelector
const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")

let playerDeck, computerDeck, inRound, stop


// Add eventlistener for handling user clicks
// The click can lead to three possibilities: restart game if one of the players has no card, flip cards if not in round, or collapse cards if in round
document.addEventListener("click", () => {
  if (stop) {
    startGame()
    return
  }

  if (inRound) {
    cleanBeforeRound()
  } else {
    flipCards()
  }
})

//start game in the begining 
startGame()


function startGame() {
  // initiate a new ordered deck with an array of cards
  const deck = new Deck()
  // shuffle cards to be random
  deck.shuffle()
  // find out the midpoint to separate decks to two: playerDeck and computerDeck
  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(48, deck.numberOfCards))//deckMidpoint

  // inRound: check in round
  // stop: check number of cards
  inRound = false
  stop = false

  
  cleanBeforeRound()
}

// collapse cards
function cleanBeforeRound() {
  inRound = false
  computerCardSlot.innerHTML = ""
  playerCardSlot.innerHTML = ""
  text.innerText = ""

  updateDeckCount()
}

// flip cards
function flipCards() {
  inRound = true

  const playerCard = playerDeck.pop()
  const computerCard = computerDeck.pop()

  playerCardSlot.appendChild(playerCard.getHTML())
  computerCardSlot.appendChild(computerCard.getHTML())

  updateDeckCount()

  // decide winner 
  if (isRoundWinner(playerCard, computerCard)) {
    //player wins, push cards to player's deck
    text.innerText = "Win"
    playerDeck.push(playerCard)
    playerDeck.push(computerCard)
  } else if (isRoundWinner(computerCard, playerCard)) {
    //player lose, push cards to computer's deck
    text.innerText = "Lose"
    computerDeck.push(playerCard)
    computerDeck.push(computerCard)
  } else {
    // draw, push back to each deck
    text.innerText = "Draw"
    playerDeck.push(playerCard)
    computerDeck.push(computerCard)
  }

  if (isGameOver(playerDeck)) {
    text.innerText = "You Lose!!"
    stop = true
  } else if (isGameOver(computerDeck)) {
    text.innerText = "You Win!!"
    stop = true
  }
}

// display card counts
function updateDeckCount() {
  computerDeckElement.innerText = computerDeck.numberOfCards
  playerDeckElement.innerText = playerDeck.numberOfCards
}

// decide winner
function isRoundWinner(cardOne, cardTwo) {
  return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
}

// check number of cards
function isGameOver(deck) {
  return deck.numberOfCards === 0
}