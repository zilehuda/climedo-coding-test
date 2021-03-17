require('dotenv/config');

const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const tabsRoute = require('./routes/tabs')


app.get('/', (req, res) => {
    res.send("THIS IS CLIMEDO TEST")
});


app.use('/tabs', tabsRoute)


mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(
    process.env.DB_CONNECTION, () => {
    console.log("connected to db")
});

const connection = mongoose.connection;

app.listen(5000);