const startBtn = document.getElementById("start-btn");

// Modals ========================================

const playModal = document.getElementById("play-modal");

// Stats =========================================

let deck;

let playerCards = [];
let playerHand = document.getElementById("player-hand");

let opCards = [];
let opHand = document.getElementById("op-hand");

let comCards = [];
let comHand = document.getElementById("com-cards");

// Game ==========================================

startBtn.addEventListener("click", function() {
  playModal.style.display = "none";
  createDeck();

  function createDeck() {
    fetch("./cards.json")
      .then(res => res.json())
      .then(cards => {
        deck = cards;

        dealPlayerCards();
        dealOpCards();
        dealComCards();

        function dealPlayerCards() {
          playerCards.push(deck[Math.floor(Math.random() * (deck.length - 1))]);
          deck.splice(deck.indexOf(playerCards[playerCards.length - 1]), 1);

          playerCards.push(deck[Math.floor(Math.random() * (deck.length - 1))]);
          deck.splice(deck.indexOf(playerCards[playerCards.length - 1]), 1);

          playerHand.innerHTML += `
            <div>
              <img src=${playerCards[0].img} width="150">
            </div>
            <div>
              <img src=${playerCards[1].img} width="150">
            </div>
          `;
        }

        function dealOpCards() {
          opCards.push(deck[Math.floor(Math.random() * (deck.length - 1))]);
          deck.splice(deck.indexOf(opCards[opCards.length - 1]), 1);

          opCards.push(deck[Math.floor(Math.random() * (deck.length - 1))]);
          deck.splice(deck.indexOf(opCards[opCards.length - 1]), 1);

          opHand.innerHTML += `
            <div>
              <img src=${opCards[0].img} width="150">
            </div>
            <div>
              <img src=${opCards[1].img} width="150">
            </div>
          `;
        }

        function dealComCards() {
          comCards.push(deck[Math.floor(Math.random() * (deck.length - 1))]);
          deck.splice(deck.indexOf(comCards[comCards.length - 1]), 1);

          comCards.push(deck[Math.floor(Math.random() * (deck.length - 1))]);
          deck.splice(deck.indexOf(comCards[comCards.length - 1]), 1);

          comCards.push(deck[Math.floor(Math.random() * (deck.length - 1))]);
          deck.splice(deck.indexOf(comCards[comCards.length - 1]), 1);

          comCards.push(deck[Math.floor(Math.random() * (deck.length - 1))]);
          deck.splice(deck.indexOf(comCards[comCards.length - 1]), 1);

          comCards.push(deck[Math.floor(Math.random() * (deck.length - 1))]);
          deck.splice(deck.indexOf(comCards[comCards.length - 1]), 1);

          comHand.innerHTML += `
            <div>
              <img src=${comCards[0].img} width="150">
            </div>
            <div>
              <img src=${comCards[1].img} width="150">
            </div>
            <div>
              <img src=${comCards[2].img} width="150">
            </div>
            <div>
              <img src=${comCards[3].img} width="150">
            </div>
            <div>
              <img src=${comCards[4].img} width="150">
            </div>
          `;
        }

      })
      .catch(err => console.error(err));
  }

}, { once: true });
