
const userInput = document.querySelector('#guessField');
let random = Math.round(Math.random() * 100 + 1);
const lowhi = document.querySelector('.lowOrHi');
const prev = document.querySelector('#guesses');
const guessSlot = document.querySelector('.guesses');
const startOver = document.querySelector('.resultParas')
let remainingGuesses = document.querySelector('.lastResult');

const submit = document.querySelector('#subt');
let playGame = true;
let prevGuess = [];
let chances = 1;


if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess){
   if(isNaN(guess)) {
     alert(`enter a valid guess`);
   } else if (guess>100){
     alert(`enter a number below 100`);
   } else if(guess<1) {
     alert(`enter a positive number`);
   } else{
      prevGuess.push(guess);
      if(chances>10){
        displayGuess(guess);
        displayMessage(`Game over! no chances left!`);
        endGame();
      }else{
        displayGuess(guess);
        checkGuess(guess);
      }
   }
}
function checkGuess(guess){
      if(guess > random){
        lowhi.innerHTML = `guess is too high`;
      } else if(guess < random){
        lowhi.innerHTML = `guess is too low`;
      } else if(guess == random){
        lowhi.innerHTML = `you guessed it correctly`;
        endGame();
      }
}
function displayGuess(guess){
      userInput.value = ' ';
      guessSlot.innerHTML += `${guess} `;
      chances++;
      remainingGuesses.innerHTML = `${ 11 - chances } `;
}
function displayMessage(message){
      lowhi.innerHTML = `${message}`;
}
function newGame(){
      const newgamebutton = document.querySelector('#newgame');
      newgamebutton.addEventListener('click',function(e){
        random = Math.round(Math.random() * 100 + 1);
        userInput.removeAttribute('disabled' , ' ');
        chances = 1;
        guessSlot.innerHTML = ' ';
        remainingGuesses.innerHTML = `${ 11 - chances } `;
        prevGuess = [];
        startOver.removeChild(p);

        playGame = true;
      });
}


const p = document.createElement('p');

function endGame(){
      userInput.value = ' ';
      userInput.setAttribute('disabled' , ' ');
      p.classList.add('button');
      p.innerHTML = `<h2 id = "newgame">start new game</h2>`
      startOver.appendChild(p);
      playGame = false;
      newGame();
}