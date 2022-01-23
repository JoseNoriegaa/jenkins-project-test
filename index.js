// External dependencies
const express = require('express');
const morgan = require('morgan');

// Initializations
const app = express();

// Configuration
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!',
  });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
