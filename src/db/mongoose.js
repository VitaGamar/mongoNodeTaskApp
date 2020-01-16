const mongoose = require('mongoose');
const validator = require('validator');


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: true,
        validate(value){
            if(value < 0) {
                throw new Error('age is not correct')
            }
        }
    },
    password: {
      type: String,
      required: true,
        minLength: 6,
      trim: true,
        validate(value){
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

const me = new User({
    name: '  Vita  ',
    password: '  vitaaaaa ',
    email: 'Vita@gmail.com   '
});
me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(error, 'Error!')
})

/*
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true
    }, complete: {
        type: Boolean
    }
});

const task = new Task({description: 'task1', complete: false});
task.save().then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error, 'Error!')
})*/
 // https://www.attosol.com/docker-for-developers-setting-up-nodejs/