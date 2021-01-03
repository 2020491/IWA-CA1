// Init Server
const express = require('express');
const app = express();

// Created authentication routes -> inside _routes folder auth.js file
// Import created auth_route i.e. nav to file
const auth_route = require('./_routes/auth');

// Create route-middle-ware
app.use('/api/user', auth_route);

// Start Server
app.listen(3000, () => console.log('Server Running...'));