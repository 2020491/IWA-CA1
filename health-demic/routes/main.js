const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home', req.context);
});

router.get('/todo', (req, res, next) => {
    res.render('todo', req.context);
});

module.exports = router;