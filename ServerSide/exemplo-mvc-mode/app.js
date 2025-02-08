const express = require('express');
const app = express();
const taskController = require('./controllers/taskController');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', taskController);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});