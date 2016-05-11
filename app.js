var userName = prompt('Hi, thanks for visiting my page!! What is your name?');
alert('Nice to meet you, ' + userName + '. I am going to ask one question.');
console.log('the user name is ' + userName + ' and he is the best potential boss ever!');

var response1 = prompt('Do you really plan to hire me? Be honest.').toLowerCase();
var answer1 = 'yes';

if (response1 === answer1 || response1 === answer1[0]) {
  alert('That is fantastic ' + userName + ', When do I start?');
} else {
  alert('Well thanks for nothing ' + userName + ', I really do have better things to do you know!');
}
