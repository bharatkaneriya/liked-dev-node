const User = require('../models/user.model');

const regsiter = async (req,res) => {
    console.log('register!');
    console.log(req.body);

    try{
        const user = new User(req.body);
        await user.save();
        res.send('Registered successfully!');

    }
    catch(err){
        console.error(err);
        res.status(400).send(err.message)
    }
};

const validateEmail = async (req,res) => {

}

const validateUsername = async (req,res) => {

}

const login = async (req, res) => {

}

const forgotPassword = async (req, res) => {

}

const resetPassword = async (req,res) => {

}

module.exports = {
    regsiter
};