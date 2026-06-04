import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const requireAuth = async (req, res, next) => {
    const {authorization} = req.headers;
    console.log(authorization);
    if (!authorization) {
        return res.status(401)
            .json({error: 'AuthToken is required'})
    }

    const token = authorization.split(' ')[1];

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({_id}).select('_id');

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'api querry is not allowed'})
    }
}

export default requireAuth;