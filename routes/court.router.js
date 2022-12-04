const router = require('express').Router();
const courtController = require('../controllers/court.controller');

/**
 * ENDPOINTS
 */

//getAll
router.get('/', async(req,res) => {
    try {
        res.json(await courtController.getAll(req.query.type));
    } catch (error) {
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//getReserves
router.get('/:id/reserves', async (req, res) => {
    try {
        res.json(await courtController.getReserves(req.params.id, req.query.date));
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});

module.exports = router;