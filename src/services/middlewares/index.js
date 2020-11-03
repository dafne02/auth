// >> Here is where will
// declared the middlewares
const { json } = require('body-parser');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config');

const authenticate =(req, res, next) =>{
    const token = req.headers.token;
    if(token != null){
        console.log("Token")
        jwt.verify(token,jwtSecret, (err, user) =>{
            if(err){
                res.status(403).json({msg: err.message})
            }else{
                console.log(user)
                req.user = user;
                res.status(200).json({msg: "Autenticado", user: user});
            }
        });
        res.status(401).json({message: "Invalid token"});
    }else{
        console.log("token else")
        res.status(403).json({msg: "error"})
    }
}

module.exports = { authenticate}
