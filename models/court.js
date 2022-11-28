'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Court extends Model {
        static associate(models) {

            this.hasMany(models.Reserve, {
                sourceKey: 'id',
                foreignKey: 'idCourt'
            });
        };
    };

    Court.init({
        type: DataTypes.BOOLEAN,
        number: DataTypes.INTEGER,
        availability: DataTypes.BOOLEAN,
        date: DataTypes.DATE,
        time: DataTypes.TIME
    },
        {
            sequelize,
            modelName: 'Court',
        });

    return Court
};