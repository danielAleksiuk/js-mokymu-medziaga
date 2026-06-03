import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.signup = async function (userName, password) {
    if (!userName || !password) {
        throw Error('all fields are required')
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('your password is toooooo weaaak');
    }
    
    const exists = await this.findOne({userName});

    if (exists) {
        throw Error('this user name is already used');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({userName, password: hash})

    return user;
}

userSchema.statics.login = async function(userName, password) {
    if (!userName || !password) {
        throw Error('all fields are required');
    }

    const user = await this.findOne({userName});
    if (!user) {
        throw Error('no such username');
    }

    const match = await bcrypt.compare(
        password,
        user.password
    );

    if (!match) {
        throw Error('passsword is bad')
    }

    return user;
}

export default mongoose.model(
    'User',
    userSchema
);