const MongoClient = require('mongodb').MongoClient;
const facebookAuth = require('./facebook');
const URL = 'mongodb://localhost:27017/';
const databaseName = 'user_registration';
const collectionName = 'users';

async function facebookLogin(queryUser, res) {
    try {
        const result = await facebookAuth.authenticate(queryUser.accessToken)
        console.log('facebook login', result)
        return res.status(200).send(result);
    } catch (error) {
        return res.status(403).send({ err: 'wrong password, user might try to connect as another user' });
    }
}
function Login(queryUser, res) {
    if (queryUser.accessToken) {
        return facebookLogin(queryUser, res);
    }
    MongoClient.connect(URL, function (err, db) {
        if (err) {
            return res.status(500).send({ err: 'err@' });
        }
        const dbo = db.db(databaseName);
        dbo.collection(collectionName).findOne(queryUser, function (err, user) {
            if (err) {
                return res.status(500).send({ err: 'err@' });
            }
            if (user) {
                return res.status(200).send(user);
            }
            return res.status(403).send({ err: 'wrong password, user might try to connect as another user' });
        });
    });
}

function SignUp(req, res) {
    MongoClient.connect(URL, function (err, db) {
        if (err) {
            return res.status(500).send({ err });
        }
        const dbo = db.db(databaseName);
        const queryUser = req.body;
        dbo.collection(collectionName).findOne({ email: queryUser.email }, function (err, userFound) {
            if (err) {
                return res.status(500).send({ err });
            }
            if (userFound) {
                console.log(queryUser);
                return res.status(400).send({ err: 'user already exists' });
            }
            dbo.collection(collectionName).insertOne(queryUser, function (err, result) {
                if (err) {
                    return res.status(500).send({ err });
                }
                return res.status(201).send(result);
            })
        });
    });
}
module.exports.Login = Login;
module.exports.SignUp = SignUp;