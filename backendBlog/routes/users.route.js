const express = require('express');
const { getAllUsers, registerUsers, getUser, loginUsers, logoutUsers } = require('../controller/users.controller');
const cookieJWTAuth = require('../middleware/cookieJWTAuth');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.use(express.json());

router.route('/')
                .get(getAllUsers) // for owner only

router.route('/:id')
                .get(getUser) // for owner only

router.route('/register')
                        .post(registerUsers) // for owner, admin and users

router.route('/login')
                        .post(loginUsers)

router.route('/logout')
                        .post(logoutUsers)


module.exports = router;