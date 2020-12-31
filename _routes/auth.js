// Create router
const router = require('express').Router();

// Create empty router
router.post('/register', (req, res) => {
    // send back a response msg
    res.send('register');

});

// Export router
module.exports = router;