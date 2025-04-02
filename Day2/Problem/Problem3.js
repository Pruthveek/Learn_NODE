const prompt=require("prompt-sync")();

const num1=prompt("Enter first number : ");
const num2=prompt("Enter second number : ");
const performOperation =(num1,num2,callbackfun)=>callbackfun(num1,num2);
const addition=(num1,num2)=>num1+num2;
const subtraction=(num1,num2)=>num1-num2;
const multiplication=(num1,num2)=>num1*num2;
const division=(num1,num2)=>(num1/num2).toFixed(2);

console.log(performOperation(num1,num2,addition));
console.log(performOperation(num1,num2,subtraction));
console.log(performOperation(num1,num2,multiplication));
console.log(performOperation(num1,num2,division));