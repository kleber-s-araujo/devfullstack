const express = require('express');
const router = express.Router();
const taskModel = require('../models/task');

router.get('/tasks', (req, res) => {
  const tasks = taskModel.getAllTasks();
  res.render('task_list', { tasks });
});

module.exports = router;