const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: true,
        validate: (value) => {
            if(value < 0) {
                throw new Error('age is not correct')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate: (value) => {
            if(value.includes("password")){
                throw new Error('Password shouldn\'t include password word')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is not correct')
            }
        }
    }
});

module.exports = User;