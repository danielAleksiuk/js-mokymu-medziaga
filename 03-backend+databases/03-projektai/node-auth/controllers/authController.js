const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign(
        {id},
        'slaptas dalykas',
        { expiresIn: 3 * 24 * 60 * 60 }
    );
}

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
        const token = createToken(
            userResponse._id
        );
        res.cookie(
            'jwt',
            token,
            {httpOnly: true})
        res.cookie(
            'email',
            userResponse.email
        )    
        res.status(201).json({
            user: userResponse._id
        });
    }
    catch (error) {
        console.log(error);
        const errorList = handleError(error);
        res.status(400).json({ errorList })
    }
}

const login_post = async (req, res) => {
    const {email, password} = req.body;

    try {
        const userResponse = await User.login(email, password);
        const token = createToken(userResponse._id);
         res.cookie(
            'jwt',
            token,
            {httpOnly: true})
        res.cookie(
            'email',
            userResponse.email
        )    
        res.status(201).json({
            user: userResponse._id
        });
    } catch(error) {
        console.log(error);
        const errorList = handleError(error);
        res.status(400).json({errorList})
    }
}

const logout_get = async (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.redirect('/')
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

    if (error.message === 'incorect email') {
        errors.email = 'this email is not registered';
    }

    if (error.message === 'incorect password') {
        errors.password = 'this password is incorect';
    }

    return errors;
}

module.exports = {
    signup_get,
    signup_post,
    login_get,
    login_post,
    logout_get
};