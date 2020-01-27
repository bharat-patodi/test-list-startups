const express = require('express');
const router = express.Router();

// Startup model
const Startup = require('../../models/Startup');

// @route   GET api/startups
// @desc    GET All startups
// @access  Public
router.get('/', (req, res) => {
    Startup
        .find()
        .then(startups => res.json(startups));
})

// @route   POST api/startups
// @desc    Create a Startup
// @access  Public
router.post('/', (req, res) => {
    const newStartup = new Startup({
        name: req.body.name,
        country: req.body.country
    });
    // Save the new startup to the db
    newStartup.save()
        .then(startup => res.json(startup));
})

// @route   DELETE api/startups
// @desc    Delete a Startup
// @access  Public
router.delete('/:id', (req, res) => {
    Startup.findById(req.params.id)
        .then(startup => startup.remove()
            .then(() => res.json({
            success: true
            })))
        .catch(err => res.status(404).json({success: false}));
});

// Export the router
module.exports = router;