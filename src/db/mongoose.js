const mongoose = require('mongoose');

const dbname = process.env.MONGODB_URL;

mongoose.connect(dbname, {
    useNewUrlParser: true, useCreateIndex: true
}).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", dbname, err);
});

 // https://www.attosol.com/docker-for-developers-setting-up-nodejs/