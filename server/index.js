const path = require('path');
const express = require('express');
const app = express();

// Install logging middleware
const volleyball = require('volleyball');
app.use(volleyball);

// Static Middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route all requests to API
app.use('/api', require('./api'));

// Serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Handle 500 Errors
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error.');
});

// Start listening
// const port = process.env.PORT || 3000; useful when deploying on Heroku
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
