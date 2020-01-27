// Import the modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const startups = require('./routes/api/Startups');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// DB Config
db = "mongodb://localhost/startup-list"

// Connect to Mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('Mongo is live'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/startups', startups);

// Serve app
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`My Server started on port ${port}`));
