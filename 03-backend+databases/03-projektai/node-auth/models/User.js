const mongoose = require('mongoose');
const {isEmail} = require('validator')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'PLease enter a valid eail']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minLength: [6, 'Minimum password length is 6 character']
    }
});

userSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt();

    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email})

    if (user) {
        const auth = await bcrypt.compare(
            password,
            user.password
        );

        if (auth) {
            return user;
        }

        throw Error('incorect password');
    }

    throw Error('incorect email');
}

const User = mongoose.model('user', userSchema);
module.exports = User;