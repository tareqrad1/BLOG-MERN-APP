const jwt = require("jsonwebtoken");

const cookieJWTAuth =  (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token, "jwt token");
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN);
    next();
  } catch (err) {
    res.clearCookie("jwt");
    return res.redirect("/");
  }
};

module.exports = cookieJWTAuth;