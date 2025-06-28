const user = JSON.parse(localStorage.getItem("currentUser"));

let cookies = 0;
let grandmaCount = 0;
let grandmaCost = 50;
let cookiesPerSecond = 0;

const cookie = document.getElementById('pie');
const counter = document.getElementById('counter');
const buyGrandma = document.getElementById('buy-factory');
const grandmaDisplay = document.getElementById('factory-count');

function saveGameData(username, cookies, factory) {
  const gameStorage = JSON.parse(localStorage.getItem("gameStorage") || "[]");

  const userData = { username, cookies, factory };
  const userTemp = gameStorage.find(u => u.username === user.username)
  if (userTemp){
    userTemp.cookies = cookies
    userTemp.factory = factory
  }
  else{
    gameStorage.push(userData)
  }
  localStorage.setItem("gameStorage", JSON.stringify(gameStorage));
}



function loadGameData(username){
    const gameStorage = JSON.parse(localStorage.getItem("gameStorage") || "[]");

    const userData = gameStorage.find((u) => 
      u.username === user.username
    )
    
    if (userData){
      cookies = userData.cookies
      grandmaCount = userData.factory
    }
}

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

loadGameData(user.username)

saveGameData(user.username, cookies, grandmaCount)

// Cộng cookie tự động mỗi giây
setInterval(() => {
  cookies += grandmaCount*5;
  updateDisplay();
  saveGameData(user.username, cookies, grandmaCount)
}, 500);
