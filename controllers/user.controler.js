const { User } = require('../models');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = process.env.JWT_SECRET || 'pwsSecret';
class UserController {
    constructor() { }

    //Register
    async create(user) {

        const existingUser = await User.findOne({
            where: { dni: user.dni }
        });

        if (existingUser) {
            throw 'Ya existe una cuenta con el documento ' + user.dni;
        }

        user.isAdmin = !!user.isAdmin;
        user.password = await bcrypt.hash(user.password, 6);

        return User.create(user);
    };

    async logIn(dni, password) {
        const user = await User.findOne({
            where: { dni }
        })

        if (!user) {
            return null
        }

        if (!await bcrypt.compare(password, user.password)) {
            return null;
        }

        const payload = {
            idUser: user.id,
            isAdmin: !!user.isAdmin,
            TOKENcreationDate: new Date,
        }

        return {
            token: jwt.sign(payload, secret),
            id: user.id,
            isAdmin: user.isAdmin,
            name: user.name
        }
    };

    async getAll() {
        return User.findAll();
    };

    async getById(id) {
        return User.findOne({
            where: { id }
        })
    };

    async logOut() {

    };

    async update() {
        return User.update(
            user,
            {
                where:
                    { id }
            }
        )
    };

    async delete(id) {
        return User.destroy({
            where: { id }
        })
    };
};

let userController = new UserController;

module.exports = userController;