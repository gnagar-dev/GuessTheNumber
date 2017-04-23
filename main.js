var randomNumber = getRandomNumber();

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHigh');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;

var resetButton = document.querySelector('.resetSubmit');
resetButton.style.visibility = 'hidden';
guessField.focus();

function getRandomNumber(){
    return Math.floor(Math.random()*100) +1;
}

function checkGuess() {
  var userGuess = Number(guessField.value);
  if(guessCount === 1){
        guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';

  if(userGuess === randomNumber){
        ResultFound();
  } else if(guessCount === 10){
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
  } else {
        ResultNotFound(userGuess);
  }  
}

function ResultFound(){
      lastResult.textContent = 'Congratulations! You got it right!';
      setColor(lastResult,'green');
      lowOrHigh.textContent = '';
      setGameOver();
}

function ResultNotFound(userGuess){
    lastResult.textContent = 'Wrong!';
        setColor(lastResult,'red');
        if(userGuess < randomNumber){
            lowOrHigh.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber){
            lowOrHigh.textContent = 'Last guess was too high!';
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();
}

function setColor(control, color)
{
    control.style.backgroundColor = color;    
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton.style.visibility = 'visible';  
}

function resetGame(){
    guessCount = 1;

    var allParas = document.querySelectorAll('.resultParas p');

    for(var i=0;i<allParas.length;i++){
        allParas[i].textContent = '';
    }
        resetButton.style.visibility = 'hidden'; 

        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus(); 

        setColor(lastResult,'white');
        
        randomNumber = getRandomNumber();
    }

    guessSubmit.addEventListener('click',checkGuess);
    resetButton.addEventListener('click', resetGame);