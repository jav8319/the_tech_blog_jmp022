const router = require('express').Router();

const apiRoutes = require('./api');
const postsRoutes = require('./postsRoutes');

router.use('/', postsRoutes);
router.use('/api', apiRoutes);

module.exports = router;