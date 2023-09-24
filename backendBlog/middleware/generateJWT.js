const jwt = require('jsonwebtoken');

module.exports = async (payload) => {
    const token = await jwt.sign(payload, process.env.ACCESS_TOKEN , {expiresIn: '7d'});
    return token;
}