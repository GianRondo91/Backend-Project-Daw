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
            newOrder,
            status
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error' + error
        });
    };
});

//getAll
router.get('/', async (req, res) => {
    try {
        let reserved = null;

        if (req.query.reserved) {
            reserved = req.query.reserved === '1';
        }

        res.json(await reserveController.getAll(getUserId(req), reserved));
    } catch (error) {
        res.status(500).json({
            message: 'Server error' + error
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
            message: 'Server error' + error
        });
    };
});

//update
/*
router.put('/:id', async(req, res) => {
    try {
        let id = req.params.id;
        let status = 'Reserva actualizada con exito';
        let result = await reserveController.update(req.body, id, getUserId(req));

        res.json({
            result,
            status
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error' + error
        });
    };
});
*/

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
            message: 'Server error' + error
        });
    }
});

module.exports = router;