const router = require('express').Router();

const userRouter = require('./routes/user.router');
const reserveRouter = require('./routes/reserve.router');
const courtController = require('./routes/court.router');

//Obtengo el middleware de AUTH
const auth = require('./middleware/auth');

//Resources
router.use('/users', auth, userRouter);
router.use('/reserve', auth, reserveRouter);
router.use('/court', auth, courtController);

module.exports = router;