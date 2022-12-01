const router = require('express').Router();
const reserveController = require('../controllers/reserve.controller');
const { route } = require('./user.router');

/***
 * ENDPOINTS
 */

const getUserId = req => req.user.isAdmin ? null : req.user.id;

//Create
router.post('/', async (req, res) => {
    try {
        let status = 'Reserva creada con exito';
        let newReserve = await reserveController.create(req.body, req.user.id);

        res.json({
            newReserve,
            status
        });
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});

//getAll
router.get('/', async (req, res) => {
    try {
        res.json(await reserveController.getAll(getUserId(req), req.query.date));
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});

//findById
router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;

        res.json(await reserveController.findById(id, getUserId(req)));
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});

//delete
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let status = 'Reserva eliminada con exito';
        let result = await reserveController.delete(id, getUserId(req));

        res.json({
            result,
            status
        })
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
});

module.exports = router;