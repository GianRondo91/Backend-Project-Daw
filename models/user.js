'use strict';

const {
    Model, DATE
} = require('sequelize');

module.exports = (sequlize, DataTypes) => {
    class User extends Model {
        static associate(models) {

            this.hasMany(models.Reserve, {
                sourceKey: 'id',
                foreignkey: 'idUser'
            });
        };
    };

    User.init({
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: DataTypes.STRING,
        dni: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        cp: DataTypes.INTEGER,
        password: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
    },
        {
            sequlize,
            modelName: 'User',
        });

    return User
};