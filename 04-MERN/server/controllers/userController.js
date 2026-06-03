import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign(
        {id},
        process.env.SECRET,
        {expiresIn: '3d'}
    )
}

export const loginUser = async (req, res) => {
    const {userName, password} = req.body;

    try {
        const user = await User.login(
            userName,
            password
        );
        const token = createToken(user._id);
        res.status(200).json({userName, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const signupUser = async (req, res) => {
   const {userName, password} = req.body;

   try {
        const user = await User.signup(
            userName,
            password
        );
        const token = createToken(user._id);
        res.status(200).json({userName, token})
   } catch (error) {
        res.status(400).json({
            error: error.message
        })
   }
}