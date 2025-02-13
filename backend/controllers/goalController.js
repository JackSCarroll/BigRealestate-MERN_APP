const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel')

// @desc: Get goals
// @route: GET /api/goals
// @access: Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
});

// @desc: Set goals
// @route: POST /api/goals
// @access: Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }
    const goal = Goal.create({
        text: req.body.text,
        user: req.user.id,
    });
    res.status(200).json(goal);
});

// @desc: Update goal with id
// @route: POST /api/goals/:id
// @access: Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // Check if logged in user matches the goal creator user
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorised to modify this goal')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedGoal);
});

// @desc: Delete goal with id
// @route: DELETE /api/goals/:id
// @access: Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // Check if logged in user matches the goal creator user
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorised to delete this goal')
    }

    await goal.deleteOne();
    res.status(200).json({message: `Deleted goal with id: ${req.params.id}`});
});


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}