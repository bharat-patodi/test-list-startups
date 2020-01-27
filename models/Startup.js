const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Schema
const StartupSchema = new Schema({

    name: {
        type: "string",
        required: true
    },
    country: {
        type: "string",
        required: true
    }
});

module.exports = Startup = mongoose.model('startup', StartupSchema)