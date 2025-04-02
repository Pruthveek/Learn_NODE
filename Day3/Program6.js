const express= require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("This is a home page");
});

app.get("/weather",(req,res)=>{
    const weather={
        temperature: 25,
        conditions: 'Sunny',
        city: 'Los Angeles'
    }
    res.json(weather.city);
})

app.listen('3000',()=>{
    console.log("This server is working on a port number 3000")
})