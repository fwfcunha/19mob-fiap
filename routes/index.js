const express = require('express');
// Rotas
const users = require('./users');

// instancia do router
const router = express.Router();

// Rotas base
router.use('/users', users);

module.exports = router;