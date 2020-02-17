const express = require('express');
const mod = require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('server is on the port', port)
});


const jwt = require('jsonwebtoken');
const myFunction = async () => {
    const token = jwt.sign({ _id: '' }, 'thisismynewcource', {expiresIn: '7 days'})
    console.log(token);

    const data = jwt.verify(token, 'thisismynewcource')
    console.log(data);
};

myFunction();