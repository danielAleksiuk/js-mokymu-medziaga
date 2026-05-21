const User = require('../models/User');

const signup_get = (req, res) =>  {
    res.render('signup');
}

const login_get = (req, res) => {
    res.render('login')
}

const signup_post = async (req, res) =>  {
    const {email, password} = req.body;
    
    try {
        const userResponse = await User.create({email, password})
        res.status(201).json(userResponse);
    }
    catch (error) {
        console.log(error);
        const errorList = handleError(error);
        res.status(400).json({ errorList })
    }

    console.log(email, password);
    res.send('new signup');
}

const login_post = (req, res) => {
    const {email, password} = req.body;
    
    console.log(email, password);
    res.send('new login')
}

const handleError = (error) => {
    let errors = {email: '', password: ''}

    if (error.code === 11000) {
        errors.email = 'that email is already used';

        return errors;
    }

    if (error.message.includes('user validation failed')) {
        Object.values(error.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        });
    }

    return errors;
}

module.exports = {
    signup_get,
    signup_post,
    login_get,
    login_post
};