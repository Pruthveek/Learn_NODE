const express = require('express');
const app = express();
const db = require('./db');
const MenuItem = require('./models/menu')
const bodyparser = require('body-parser');

app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send("Welcome to our hotel.\nPlease checkout our menu")
})
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

app.listen(3000, () => {
    console.log('Hello this server is runing on port number 3000 \n http://localhost:3000/')
})