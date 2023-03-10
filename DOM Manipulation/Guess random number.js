//Guess a random number game
//User guesses a random number between certain range | if the user input matches the random number generated by the computer, user wins or else user loses.

//HTML for this
// <form id='form'>
// <input id='user_input' placeholder='Enter a number between 1-6 !'>
// </form>
// <button class='btn btn-info'>Click for result</button>
// <button class='btn btn-success' onClick = 'reset()'>Reset</button>
// <button class='btn btn-primary' onClick='reload()'>Retry Game</button>

// <div id='user_inputnum'></div>
// <div id='random_number'></div>

// <div id='result'></div>
// <div class='image'></div>

// <style>
// #result {
//   display: inline-block;
//   width: 60px;
// }
// </style>


btn.addEventListener('click', ()=>{
if(parseInt(userInput.value) == randomNumber) {
  console.log('You Won');
  result.innerHTML = 'You Won';
  randomNum.innerHTML =  'Random Number' + '=' + randomNumber;
  userInputNum.innerHTML = 'You guessed' + '=' + userInput.value;
  result.style.backgroundColor='Green';

  var img = document.createElement("img");
  img.src = "https://t3.ftcdn.net/jpg/04/48/34/40/360_F_448344028_u3175fEE5zNtjVaAn64RZhb6WFHpmo3D.jpg";
  var src = document.querySelector(".image");
  src.appendChild(img);
  }

else if(userInput.value.length == ' ' || userInput.value > 6 || userInput.value =='0') {
alert('This is a dice game...Please enter a number between 1-6 ! \nNo ZERO. DO NOT enter a TEXT');
}

//Javascript reads the user input as sring even if the number is entered => if the input attribute in HTML is not defined as number.
/* else if(typeof userInput.value === "string") {
alert('Please enter a number between 1-6 ! DO NOT enter a TEXT');
} */

else {
console.log('You Lost');
result.innerHTML = 'You Lost';
randomNum.innerHTML =  'Random Number' + '=' + randomNumber;
userInputNum.innerHTML ='You guessed' + '=' +  userInput.value;
result.style.backgroundColor = 'Red';

var img = document.createElement("img");
img.src = "https://t3.ftcdn.net/jpg/00/76/85/98/360_F_76859814_gvCSqNfjQeP9PeOLC586NUBjLmoE8M0f.jpg";
var src = document.querySelector(".image");
src.appendChild(img);
}
})