const prompt = require('prompt-sync')();
const name = prompt('What is your name? : ');
const age = prompt("what is your age? : ");
if(age<18)
    console.log(`Congretulations ${name}, You get 20% discount!`);
else if(age>=65)
    console.log(`Congretulation ${name}, you get a 30% senior discount!`)
else
    console.log(`Sorry ${name}, Normal ticket price appplies.`);
