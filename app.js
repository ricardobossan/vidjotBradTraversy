const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Connect to mongoose
mongoose
  .connect(`mongodb://localhost:${port}/vidjot.dev`, {
    useNewUrlParser: true
  })
  .then(() => console.log('mongoDb Connected...'))
  .catch(err => console.log(err));

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

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
