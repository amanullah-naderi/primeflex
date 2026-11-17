// wa_ss24_primeflex/backend/models/authModel.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Invalid email address']
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.signup = async function (username, email, password) {
    try {
        const existingUser = await this.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await this.create({ username, email, password: hashedPassword });
        return newUser;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = mongoose.model('User', userSchema);