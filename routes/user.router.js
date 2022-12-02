const router = require('express').Router();
const userController = require('../controllers/user.controler');

/**
 * ENDPOINTS 
*/

//Register
router.post('/', async (req, res) => {
    try {
        if (req.body.isAdmin && (!req.user || !req.user.isAdmin)) {
            res.sendStatus(403);
            return;
        }

        let status = 'Usuario creado con exito';
        let newUser = await userController.create(req.body);

        res.json({
            newUser,
            status
        });
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});

//Login
router.post('/login', async (req, res) => {
    try {
        let dni = req.body.dni;
        let password = req.body.password;
        let token = await userController.logIn(dni, password);

        if (token) {
            res.json(token);
        } else {
            res.sendStatus(403);
        };
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});

//Recover
/*
router.post('/recover', async (req, res) => {
    try {
        let dni = req.body.dni;
        let status = 'Email correcto';

        res.json(await userController.getById(req.params.dni));
        
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});
*/

//getAll
router.get('/', async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            res.json([]);
        } else {
            res.json(await userController.getAll());
        };
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});

//getId
router.get('/:id', async (req, res) => {
    try {
        res.json(await userController.getById(req.params.id));
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});

//Update
router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        if (!req.user.isAdmin && parseInt(id) !== req.user.id) {
            res.sendStatus(403);
            return;
        }

        let status = 'Usuario actualizado con exito';
        let result = await userController.update(req.body, id);

        res.json({
            result,
            status
        })
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
})

//logOut
router.get('/logout', async (req, res) => {
    try {
        let status = 'Usuario desogeado con exito';

        res.sendStatus(200);
        res.json({ status });
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

        if (!req.user.isAdmin && parseInt(id) !== req.user.id) {
            res.sendStatus(403);
            return;
        }
        
        let result = await userController.delete(id);
        let status = 'Usuario eliminado con exito';

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