const express = require('express');
const router = express.Router();
const cors = require('cors');

const controllers = require('../controllers/controller');
const controller = require('../controllers/controller');

router.get('/', controller.obtainMetaTags);

module.exports = router;