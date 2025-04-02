const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello this is a home page");
});

app.listen(3000,()=>{
    console.log("Server is running on port number 3000")    
})
