const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var jajananController = require('./controllers/jajananController.js');
var pemasokController = require('./controllers/pemasokController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log("Server dimulai di port 3000"));

app.use('/jajanans', jajananController);
app.use('/pemasoks', pemasokController);