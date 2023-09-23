const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers['Authorization'] || req.headers['authorization'];
    if(!authHeader) return res.status(401).json({ error: 'Invalid authorization header' });
    const token = authHeader.split(' ')[1];
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN);
        next();
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
}

module.exports = verifyToken;