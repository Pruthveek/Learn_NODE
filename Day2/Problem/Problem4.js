const prompt =require("prompt-sync")();
const fs=require("fs");

const filename=prompt("Enter file name : ");
const content=prompt("Enter your file content : ");
fs.appendFile(`${filename}.txt`,`${content} \n`,()=>{
    console.log("File is created");
})
console.log("Your file content is below ⬇️");
fs.readFile(`${filename}.txt`,"utf8",(error,data)=>{
    if(error){
        console.error(`Something went wrong : ${error}`);
        return;
    }
    console.log(data);
})