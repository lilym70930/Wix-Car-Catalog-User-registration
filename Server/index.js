const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const cars = require('./cars-data/data.json');
const routHelper = require('./routHelper');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    console.log('middleware for cors')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use((req, res, next) => {
    next();
});
app.get('/cars', (req, res) => {
    return res.send(cars);
});
app.post('/login', (req, res) => {
    return routHelper.Login(req.body, res);
});
app.post('/signup', (req, res) => {
    return routHelper.SignUp(req, res);
});
app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`);
});



