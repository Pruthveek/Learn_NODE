// JSON parse a JSON data string into a JavaScript object:
const jsonData ='{"product": "Laptop","price": 999.99}';
const jsonToObject=JSON.parse(jsonData);
console.log(jsonToObject)
console.log(jsonToObject.product)
console.log(typeof(jsonToObject))

//T o convert an object into a JSON data string:
const objectToConvert = { "name": "Bob","age": 30 };
const objectToString=JSON.stringify(objectToConvert);
console.log(objectToString)
console.log(objectToString.name)
console.log(typeof(objectToString))
