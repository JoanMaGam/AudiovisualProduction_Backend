const router = require('express').Router();

const { checkToken } = require('../helpers/middlewares');



router.use('/admins', require('./api/admins'));
router.use('/users', checkToken, require('./api/users'));
router.use('/shows', require('./api/shows'));
router.use('/characters', require('./api/characters'));
router.use('/audios', require('./api/audios'));
router.use('/store', require('./api/store'));

module.exports = router;