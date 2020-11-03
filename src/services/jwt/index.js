const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const { jwtSecret } = require('../../config');

const tomorrow = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
}

const jwtSignIn = ({_id, username, firstname, lastname, email}) => {
    return jwt.sign({
        username,email,
        name: `${firstname} ${lastname}`,
        sub: _id,
        exp: tomorrow().getTime() / 1000,
        iat: new Date().getTime() / 1000
    }, jwtSecret)
}
// >> Here is where login
// and verification functions will be declared
module.exports = {
    jwtSignIn
}