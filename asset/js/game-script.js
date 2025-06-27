let cookies = 0;
let grandmaCount = 0;
let grandmaCost = 50;
let cookiesPerSecond = 0;

const cookie = document.getElementById('pie');
const counter = document.getElementById('counter');
const buyGrandma = document.getElementById('buy-factory');
const grandmaDisplay = document.getElementById('factory-count');

cookie.addEventListener('click', () => {
  cookies++;
  updateDisplay();
});

buyGrandma.addEventListener('click', () => {
  if (cookies >= grandmaCost) {
    cookies -= grandmaCost;
    grandmaCount++;
    grandmaCost = Math.floor(grandmaCost * (1+((2/grandmaCount)/10)+0.05)); // tăng giá
    buyGrandma.textContent = `Factory ${grandmaCost} Pies`;
    updateDisplay();
  }
});

function updateDisplay() {
  counter.textContent = `Pies: ${cookies}`;
  grandmaDisplay.textContent = grandmaCount;
}

// Cộng cookie tự động mỗi giây
setInterval(() => {
  cookies += grandmaCount*5;
  updateDisplay();
}, 500);
