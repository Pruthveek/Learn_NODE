const _= require("lodash");
const arrayOfNumber=[1,2,3,4,5,6,7,8,9,10];

const sumOfEven=(number)=>{
    return _.sumBy(_.filter(number,num=>num%2==0 ));
}

console.log(sumOfEven(arrayOfNumber));