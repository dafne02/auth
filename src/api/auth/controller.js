const {model} = require('../user/model');
const {jwtSignIn} = require('../../services/jwt');
const { token } = require('morgan');

const AuthController = {};

// >> Here will be the
// endpoints for the Auth.

AuthController.getToken = async (req, res) => {
    let { username, password } = req.body;

    user = await model.findOne({ username: username }).then((user) => {
        const match = user.validatePassword(password);
        // if (match) {
        // res.status(200).json();
        // } else {
        // res.status(501).json();
        // }        
        return user;
    }).then((user) => { 
        const token = jwtSignIn(user)
        return token;
    }).then((token) => {
        console.log(token)
        const test = token;
        res.json({
            token: test,
            type: 'Bearer'
        })
    })
}


module.exports = AuthController;