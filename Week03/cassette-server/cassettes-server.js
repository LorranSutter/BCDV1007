const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'))

app.get('/', function(req, res) {
    res.redirect('/cassettes.html');
});

app.get('/api/cassettes', function(req, res) {
    let cassettesList = [
        'Careless whisperer',
        'Thriller',
        'Ok Computer',
        'Cermemonials',
        'Call the Doctor',
        'Blue in Green'
    ];
    res.send(cassettesList);
});

app.listen(port, function() {console.log(`Example cassette server is running on port ${port}!`)});