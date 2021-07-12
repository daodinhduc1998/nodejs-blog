var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewController');

router.use('/', newsController.index);



module.exports = router;