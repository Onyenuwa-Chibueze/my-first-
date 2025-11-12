const cardName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const cardContainer = document.getElementById("cardContainer");

function randomColor() {
  const r = Math.floor(Math.random() * 256);

  const g = Math.floor(Math.random() * 256);

  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g},${b})`;
}

function generateCards() {
  const count = Number(cardNumber.value);
  const namesCard = String (cardName.value)

  if (isNaN(count) || count < 0) {
    alert("Please enter a valid Number!");
    return;
  }

  if (namesCard.length === 0 || namesCard === ''){
    alert("please enter a valid name")
    return;
  }

  for (let i = 1; i <= count; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = randomColor();
    card.textContent = `Hello ${i}`;
    cardContainer.appendChild(card);
  }

for (let n = 0; n < namesCard.length; n++){
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = randomColor();
    card.textContent = `Hello ${namesCard}`;
    cardContainer.appendChild(card);
}
}

function clearCards() {
  cardContainer.innerHTML = "";
}

generateBtn.addEventListener("click", generateCards);
clearBtn.addEventListener("click", clearCards)
