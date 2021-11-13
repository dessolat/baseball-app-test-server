const { Router } = require('express');

const Controller = require('../controllers/controller')
const router = new Router();

router.get('/', Controller.getGame);

module.exports = router;
