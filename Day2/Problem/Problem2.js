const prompt = require("prompt-sync")();
const radius=prompt("Enter the radius of a Circle : ");
function calculateCircleArea(radius){
    return (area = Math.PI * radius**2).toFixed(2);
}
console.log(calculateCircleArea(radius));

const calculateCircleArea2= radius=> (Math.PI * radius**2).toFixed(2);
console.log(calculateCircleArea2(radius));