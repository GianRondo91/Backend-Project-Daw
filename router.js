const router = require('express').Router();

const userRouter = require('./routes/user.router');
const reserveRouter = require('./routes/reserve.router');
const courtController = require('./routes/court.router');

//Obtengo el middleware de AUTH
const auth = require('./middleware/auth');

//Resources
router.use('/users', auth, userRouter);
router.use('/reserves', auth, reserveRouter);
router.use('/courts', auth, courtController);

module.exports = router;