const express = require('express');
const mongoIO = require('./io.js')
const mongoDB = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('static'))

app.get('/', function(req, res) {
    res.redirect('/cassettes.html');
});

app.get('/api/cassettes', function(req, res) {
    // let cassettesList = [
    //     {title: 'Careless whisperer'},
    //     {title: 'Thriller'},
    //     {title: 'Ok Computer'},
    //     {title: 'Cermemonials'},
    //     {title: 'Call the Doctor'},
    //     {title: 'Blue in Green'}
    // ];
    // res.send(cassettesList);

    function sendDataCallback(err, docs) {
        if (docs) {
            res.json(docs);
        } else {
            console.log('ouch');
            console.log(err);
        }
    }

    mongoIO.readItem(sendDataCallback);
});

function PostCassetteAPI(req, res, next) {
    try {
        mongoIO.writeItem({ title: req.body.title });
    } catch (error) {
        next(error);
    }
    res.redirect('/cassettes.html');
}

app.post('/api/cassettes', PostCassetteAPI);

function DeleteCassetteAPI(req, res, next) {
    try {
        mongoIO.deleteItem({ _id: mongoDB.ObjectID(req.body._id), title: req.body.title });
        res.send({ _id: mongoDB.ObjectID(req.body._id) });
    } catch (error) {
        next(error);
    }
}

app.delete('/api/cassettes', DeleteCassetteAPI);

function PantsAPI(req, res, next) {
    res.json('pants pants pants !!');
}

app.get('/api/pants', PantsAPI);

app.listen(port, function() {console.log(`Example cassette server is running on port ${port}!`)});