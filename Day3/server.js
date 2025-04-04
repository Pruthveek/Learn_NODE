const express = require('express')
const app = express();
app.get('/', function (req, res) {
    res.send('Welcome to my hotel... How i can help you ?, we have list of menus')
})
app.get('/chicken', (req, res) => {
    res.send('sure sir, i would love to serve chicken')
})
app.get('/idli', (req, res) => {
    var customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambhar: true,
        is_chutney: false
    }
    res.send(customized_idli)

})
app.listen(3000, () => {
    console.log('listening on port 3000');
})