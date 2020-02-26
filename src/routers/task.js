const express = require('express');
const Task = require('../models/task');

const router = new express.Router();

const auth = require('./../middleware/auth')

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    });
    try {
        await task.save();
        res.status(201).send(task);
    }catch(err) {
        res.status(400).send(err);
    }
});

// GET  /tasks?completed=true
// GET  /tasks?limit=10&skip=0
// GET  /tasks?sortBy=createdAt:desc
router.get('/tasks', auth, async (req, res) => {
    const {query, user} = req;
    const match = {};
    const sort = {};
    if(query.complete) {
        match.complete = query.complete === 'true'
    }
    if(query.sortBy) {
        const parts = query.sortBy.split(':');
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try {
        await user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(query.limit),
                skip: parseInt(query.skip),
                sort
            }
        }).execPopulate();
        res.send(user.tasks);
    }catch(err) {
        res.status(500).send();
    }
});

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findOne({_id, owner: req.user._id});

        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    }catch(err) {
        return res.status(500).send(err);
    }
});

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'complete'];
    const isValid = updates.every(update => allowedUpdates.includes(update));
    if(!isValid) {
        return res.status(400).send({error: 'Invalid updates'});
    }
    try {
        const task = await Task.findOne({_id: req. params.id, owner: req.user._id});

        if (!task) {
            return res.status(404).send();
        }
        updates.forEach(update => task[update] = req.body[update]);
        await task.save();

        res.send(task);
    } catch(err) {
        res.status(400).send(err);
    }
});

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id});
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch(err) {
        res.status(500).send();
    }
});

module.exports = router;