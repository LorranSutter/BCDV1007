const express = require('express')
const app = express()
const port = 8000

app.use(express.static('public'));

app.get('/', function(req, res) {
    var name = req.query.name || 'there';
    res.send(`<h1>Hello ${name}!</h1>`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))