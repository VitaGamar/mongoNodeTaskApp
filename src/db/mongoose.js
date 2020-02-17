const mongoose = require('mongoose');


mongoose.connect('mongodb://mongo:27017/task-manager-api', {
    useNewUrlParser: true, useCreateIndex: true
}).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

 // https://www.attosol.com/docker-for-developers-setting-up-nodejs/