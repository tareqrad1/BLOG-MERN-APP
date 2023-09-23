const generateJWT = require('../middleware/generateJWT');
const User = require('../model/userSchema');
const { schema } = require('../util/validationSchema');
const bcrypt = require('bcrypt');


const getAllUsers = async (req, res) => {
    const user = await User.find();
    if(!user.length) return res.status(404).json({ status: 'fail', message: 'No users found'});
    res.status(200).json({ status: 'success', users: user})
}   

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if(!user) return res.status(404).json({ status: 'fail', message: 'User not found'});
        res.status(200).json({ status:'success', user: user})
    }catch (error) {
        res.status(500).json({ status: 'fail', message: error.message })
    }
}

const registerUsers = async(req, res) => {
    try {
        const { error } = schema.validate(req.body);
        if(error) {
            return res.status(400).json({error: error.details[0].message});
        }
        const { firstName, lastName, email, password, confirmPassword } = req.body;
        const user = await User.findOne({ email: email});
        if(user) return res.status(400).json({ status: 'fail', message: 'User already exists'});
        const hashPassword = await bcrypt.hash(password, 10);
        const hashConfirmPassword = await bcrypt.hash(confirmPassword, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashPassword, 
            confirmPassword: hashConfirmPassword,
        })
        await newUser.save();
        res.status(201).json({ status: 'success', user: newUser })
    }catch (error) {
        res.status(501).json({ status: 'fail', message: error.message })
    }
}

const loginUsers = async (req, res) => {
    const { email, password } = req.body;
    const cookie = req.cookies
    if(!email || !password) return res.status(400).json({ status: 'fail', message: 'Please provide email and password' });
    const user = await User.findOne({ email: email });
    if(!user) return res.status(400).json({ status: 'fail', message: 'Invalid email or password' });
    // work with password and jwt token
    const hashPassword = await bcrypt.compare(password, user.password);
    const accessToken = await generateJWT({ id: user._id });
    res.cookie('jwt', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, 
    });
    console.log(req.cookies.jwt);
    if(user && hashPassword) return res.status(200).json({ status: 'success', data: { token: accessToken, user: user } });
    else if(!hashPassword) return res.status(400).json({ status: 'fail', message: 'Invalid email or password'});
    else return res.status(500).json({ status: 'fail', message: 'Internal server error'});
}

module.exports = {
    getAllUsers,
    getUser,
    registerUsers,
    loginUsers
}