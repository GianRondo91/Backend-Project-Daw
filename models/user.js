'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.Reserve, {
                sourceKey: 'id',
                foreignKey: 'idUser'
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
            sequelize,
            modelName: 'User',
        });

    return User;
};