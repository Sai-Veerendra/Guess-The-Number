// generate random value from 1 and 100
const random = Math.floor(Math.random() * 100) +1;
let attempts = 0;

// get DOM elements
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const message = document.createElement('p');
const attemptsDisplay = document.createElement('p');

message.id = 'message';
attemptsDisplay.id = 'attempts';
message.style.padding = '10px';
message.style.fontWeight = '600';
message.style.fontSize = '16px';
message.style.marginTop = '10px';

const container = document.getElementById('container');
container.appendChild(message);
container.appendChild(attemptsDisplay);
attemptsDisplay.textContent = `Attempts: 0 / 10`;

// Event listener for submit button
submit.addEventListener('click', () => {
  const guess = Number(input.value);

  if (input.value === ''){
    message.textContent = '😑 Please enter a number before submitting.';
    message.style.color = 'black';
    return;
  } else if (guess > 100 || guess < 1){
    message.textContent = '🙄 Please enter a number between 1 and 100.';
    message.style.color = 'black';
    return;
  }

  attempts++;
  reset.style.display = 'inline-block';

  if (guess === random) {
    message.textContent = `🎉 Correct! The number was ${random}. You guessed it in ${attempts} attempts.`;
    message.style.color = 'green';
    input.disabled = true;
    submit.textContent = 'Play Again 😄';
    reset.style.display = 'none';
    submit.onclick = () => location.reload();
  }
  else if (attempts >= 10) {
    message.textContent = '😭 Game Over! You used all 10 attempts.';
    message.style.color = 'darkred';
    input.disabled = true;
    reset.style.display = 'none';
    submit.textContent = 'Play Again 😁';
    submit.onclick = () => location.reload();
  }
  else if (guess < random) {
    message.textContent = '📉 Too low! Try again.';
    message.style.color = 'red';
  }
  else if (guess > random) {
    message.textContent = '📈 Too high! Try again.';
    message.style.color = 'red';
  }

  attemptsDisplay.textContent = `Attempts: ${attempts} / 10`;
});

// Event listener for reset button

reset.addEventListener('click', () => {
  location.reload();
});

