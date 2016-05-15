
var tally = 0;
var userName = prompt('Hi, thanks for visiting my page!! What is your name?');
alert('Nice to meet you, ' + userName + '. If it\'s okay I would like you to find out more about me by asking me a few questions. No pressure, give it your best shot.');
console.log('the user name is ' + userName + ' and he is the best potential boss ever!');

//----------------
// First Question
//----------------
function kids() {
  var response1 = prompt('Do I have 2 kids?').toLowerCase();
  var answer1 = 'yes';

  if (response1 === answer1 || response1 === answer1[0]) {
    alert('That right ' + userName + ', I have a son named Gavin and a daughter named Ruby.');
    tally = tally + 1;
  } else {
    alert('Yes it\'s true I\'m a family man ' + userName + ', I really do have two kids!');
  }
}
kids();

//----------------
// Second Question
//----------------
function city() {
  var response2 = prompt('Do I live in Seattle?').toLowerCase();
  var answer2 = 'yes';

  if (response2 === answer2 || response2 === answer2[0]) {
    alert('No ' + userName + ', afraid not.');
  } else {
    alert('That\'s right ' + userName + ', I live in T-Town!');
    tally++;
  }
}
city();

//----------------
// Third Question
//----------------
function pets(){
  var response3 = prompt('Do I have pets?').toLowerCase();
  var answer3 = 'yes';

  if (response3 === answer3 || response3 === answer3[0]) {
    alert('I\'m sorry to inform you ' + userName + ', I do not.');
  } else {
    alert('That\'s right' + userName + ', no pets for us. My son is highly allergic.');
    tally++;
  }
}
pets();

//----------------
// Fourth Question
//----------------
function job() {
  var response4 = prompt('Do I really plan to work here if I get hired?').toLowerCase();
  var answer4 = 'yes';

  if (response4 === answer4 || response4 === answer4[0]) {
    alert('You got that right ' + userName + ', When do I start?');
  } else {
    alert('Well ' + userName + ', I really do have better things to do than waste our time!');
    tally++;
  }
}
job();

//----------------
// Fifth Question
//----------------
function cars() {
  alert('Okay, now I would like to play a guessing game. I will give you 4 chances to get it right.');
  var userAnswer = 3;
  for(var i = 0; i < 4; i++){
    var guess = parseInt(prompt('Guess how many classic cars I have restored?'));
    if (guess < userAnswer){
      alert('Too low, try another guess.');
    } else if (guess > userAnswer){
      alert('Too high, guess again.');
    } else if (guess === userAnswer){
      alert('Yes! Congratulations - you guessed it!');
      tally++;
      break;
    } else {
      alert('Alright ' + userName + ' Let\'s keep to numbers. Try it again.');//displayed even if guess correct. dosesn't promt another turn??
    }
  }
}
cars();

//----------------
// Sixth Question
//----------------
function game() {
  alert('Let\'s play a game!');
  var answer = 7;
  var foundMatch = false;

  for(var s = 0; s < 4; s++) {
    var guessNumber = parseInt(prompt('Can you guess what number I\'m thinking of.'));

    if (guessNumber === answer) {
      foundMatch = true;
    }

    if (foundMatch){
      alert ('Congratulations, you nailed it!');
      tally++;
      break;
    }else {
      alert ('try again');
    }
  }
}
game();
//----------------
// Seventh Question
//----------------
function state() {
  alert('Okay, now our 7th and final question. I\'ll give you 6 tries to guess right.');
  var answerState = ['California', 'Oregon'];
  var foundMatch = false;

  for(var s = 0; s < 6; s++) {
    var guessState = prompt('Can you guess what state I lived in besides Washington?');
    //add logic to cycle thru
    for(var j = 0; j < 2; j++) {
      if (guessState === answerState[j]) {
        foundMatch = true;
        break;
      }
    }

    if (foundMatch){
      alert ('Congratulations, you got it right!');
      tally++;
      break;
    }else {
      alert ('try again');
    }
  }
}
state();
//----------------
// Report tally to user
//----------------
alert ('You got ' + tally + ' questions out of 7 questions. Not too shabby ' + userName + ' thanks for playing.');
