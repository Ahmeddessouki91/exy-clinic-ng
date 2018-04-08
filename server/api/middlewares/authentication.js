var { User } = require('./../models/user.model');
const _ = require('lodash');

var authenticate = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if (!user) {
            return res.status(401).send();
        }
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        return res.status(401).send("Unauthorized");
    });
}

var signIn = (req, res, next) => {
    var body = _.pick(req.body, ['credintial', 'password']);
    User.findByCredentials(body.credintial, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user.email);
        });
    }).catch((e) => {
        res.status(400).send(e);
    });
}

module.exports = { authenticate, signIn };