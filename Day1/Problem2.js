const prompt = require("prompt-sync")();

const length = parseFloat(prompt("Please, Give me a length of a box: "));
const width = parseFloat(prompt("Please, Give me a width of a box: "));

if (isNaN(length) || isNaN(width)) {
    console.log("Invalid input! Please enter numeric values.");
} else {
    let area = length * width;
    console.log(`Area of the box: ${area}`);
}
