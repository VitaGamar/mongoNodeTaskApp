const User = require('./user')
const Task = require('./task')

User.findByIdAndUpdate('', {age: 1}).then((user) => {
    console.log(user);
    return User.countCallback({age: 1})
}).then(count => {
    console.log(count)
}).catch(err => {
    console.log(err)
});

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = User.countCallback({age})
    return count;
};

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countCallback({complete: false})
    return count;
};

Task.findByIdAndDelete('', ).then((task) => {
    console.log(task);
    return Task.countCallback({complete: false})
}).then(count => {
    console.log(count)
}).catch(err => {
    console.log(err)
});