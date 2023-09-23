const express = require('express');
const { getAllUsers, registerUsers, getUser, loginUsers } = require('../controller/users.controller');
const cookieJWTAuth = require('../middleware/cookieJWTAuth');

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


module.exports = router;