let randomNumber, attempts, gameEnded, score, lives;

function startGame() {
  if (!gameEnded) {
    score = 0;
    resetLives();
  }

  randomNumber = generateRandomNumber();
  attempts = 0;
  gameEnded = false;
  document.getElementById('guessInput').disabled = false;
  setResultMessage('');
  updateScore();
}

function updateLives(lives) {
  const lifeElements = document.getElementsByClassName('life');
  for (let i = 0; i < lifeElements.length; i++) {
    if (i < lives) {
      lifeElements[i].classList.remove('grayscale');
    } else {
      lifeElements[i].classList.add('grayscale');
    }
  }

  checkGameOver(); // Verificar si todos los puntos de vida están en gris
}

function decrementLife() {
  const lifeElements = document.getElementsByClassName('life');
  for (let i = 0; i < lifeElements.length; i++) {
    if (!lifeElements[i].classList.contains('grayscale')) {
      lifeElements[i].classList.add('grayscale');
      break;
    }
  }

  checkGameOver(); // Verificar si todos los puntos de vida están en gris
}

function checkGameOver() {
  const lifeElements = document.getElementsByClassName('life');
  let allGray = true;

  for (let i = 0; i < lifeElements.length; i++) {
    if (!lifeElements[i].classList.contains('grayscale')) {
      allGray = false;
      break;
    }
  }

  if (allGray) {
    const message = `Game Over
     Puntuación: ${score}`;
    showPopup(message);
  }
}

function showPopup(message) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  
  const popupMessage = document.createElement('p');
  popupMessage.className = 'popup-message';
  popupMessage.textContent = 'Game Over';
  
  const scoreMessage = document.createElement('p');
  const scoreLabel = document.createTextNode('Puntuación: ');
  const scoreSpan = document.createElement('span');
  scoreSpan.id = 'popup-score';
  scoreSpan.textContent = score;
  scoreMessage.appendChild(scoreLabel);
  scoreMessage.appendChild(scoreSpan);
  
  const restartButton = document.createElement('button');
  restartButton.textContent = 'Reiniciar';
  restartButton.addEventListener('click', function() {
    resetGame();
    document.body.removeChild(popup);
  });

  const closeButton = document.createElement('span');
  closeButton.className = 'popup-close';
  closeButton.addEventListener('click', function() {
    document.body.removeChild(popup);
  });

  popup.appendChild(popupMessage);
  popup.appendChild(scoreMessage);
  popup.appendChild(restartButton);
  popup.appendChild(closeButton);
  document.body.appendChild(popup);
}

function resetGame() {
  startGame();
  const lifeElements = document.getElementsByClassName('life');
  for (let i = 0; i < lifeElements.length; i++) {
    lifeElements[i].classList.remove('grayscale');
  }
}



function resetLives() {
  lives = 5;
  updateLives(lives);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
  if (gameEnded) {
    return;
  }

  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    setResultMessage('Por favor, ingresa un número válido entre 1 y 10.');
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    setResultMessage(`¡Felicitaciones! Adivinaste el número en ${attempts} intentos.`);
    guessInput.disabled = true;
    gameEnded = true;
    score++;
    updateScore();
    generateNextNumber();
    colorNextLife(); // Colorear el siguiente punto de vida al adivinar el número
  } else if (guess < randomNumber) {
    setResultMessage('El número que estoy pensando es mayor. ¡Sigue intentando!');
    decrementLife();
  } else {
    setResultMessage('El número que estoy pensando es menor. ¡Sigue intentando!');
    decrementLife();
  }

  guessInput.value = '';
  guessInput.focus();
}

function generateNextNumber() {
  randomNumber = generateRandomNumber();
}

function resetGame() {
  startGame();
}

function setResultMessage(message) {
  const resultMessage = document.getElementById('resultMessage');
  resultMessage.textContent = message;
}

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = score;
}

function colorNextLife() {
  const lifeElements = document.getElementsByClassName('life');
  for (let i = 0; i < lifeElements.length; i++) {
    if (lifeElements[i].classList.contains('grayscale')) {
      lifeElements[i].classList.remove('grayscale');
      break;
    }
  }
}

startGame();


function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
  if (gameEnded) {
    return;
  }

  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    setResultMessage('Por favor, ingresa un número válido entre 1 y 10.');
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    setResultMessage(`¡Felicitaciones! Adivinaste el número en ${attempts} intentos.`);
    guessInput.disabled = true;
    gameEnded = true;
    score++;
    updateScore();
    generateNextNumber();
    colorNextLife(); // Colorear el siguiente punto de vida al adivinar el número
  } else if (guess < randomNumber) {
    setResultMessage('El número que estoy pensando es mayor. ¡Sigue intentando!');
    decrementLife();
  } else {
    setResultMessage('El número que estoy pensando es menor. ¡Sigue intentando!');
    decrementLife();
  }

  guessInput.value = '';
  guessInput.focus();
}

function generateNextNumber() {
  randomNumber = generateRandomNumber();
}

function resetGame() {
  startGame();
}

function setResultMessage(message) {
  const resultMessage = document.getElementById('resultMessage');
  resultMessage.textContent = message;
}

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = score;
}

function colorNextLife() {
  const lifeElements = document.getElementsByClassName('life');
  for (let i = 0; i < lifeElements.length; i++) {
    if (lifeElements[i].classList.contains('grayscale')) {
      lifeElements[i].classList.remove('grayscale');
      break;
    }
  }
}
function checkGameOver() {
  const lifeElements = document.getElementsByClassName('life');
  let allGray = true;

  for (let i = 0; i < lifeElements.length; i++) {
    if (!lifeElements[i].classList.contains('grayscale')) {
      allGray = false;
      break;
    }
  }

  if (allGray) {
    const message = `Game Over
     Puntuación: ${score}`;
    showPopup(message);
    disableInput(); // Deshabilitar el campo de entrada de número
  }
}

function disableInput() {
  const guessInput = document.getElementById('guessInput');
  guessInput.disabled = true;
}

startGame();
