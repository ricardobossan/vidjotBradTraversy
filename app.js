const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose
  .connect('mongodb://localhost/vidjotdev', { useNewUrlParser: true })
  .then(() => console.log('mongoDb Connected...'))
  .catch(err => console.log(err));

// Load Idea Model
require('./models/Idea');

const Idea = mongoose.model('ideas');

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome1';
  console.log(req.name);
  // Sends somethign to the browser
  res.render('index', {
    title: title
  });
});

app.get('/about', (req, res) => {
  // Sends somethign to the browser
  res.render('about');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
