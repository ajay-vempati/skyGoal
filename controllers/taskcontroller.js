const Task = require('../models/Task');

// Create Task
const createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.create({ title, description, userId: req.user._id });
  res.status(201).json(task);
};

// Get User Tasks
const getUserTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user._id });
  res.json(tasks);
};

// Update Task
const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  
  if (task && task.userId.toString() === req.user._id.toString()) {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: 'Task not found or unauthorized' });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task && task.userId.toString() === req.user._id.toString()) {
    await task.deleteOne();
    res.json({ message: 'Task removed' });
  } else {
    res.status(404).json({ message: 'Task not found or unauthorized' });
  }
};

module.exports = { createTask, getUserTasks, updateTask, deleteTask };
