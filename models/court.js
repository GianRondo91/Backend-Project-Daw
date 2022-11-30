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
        number: DataTypes.INTEGER,
        category: DataTypes.BOOLEAN,
        availability: DataTypes.BOOLEAN,
        time: [
            {
                hour: DataTypes.TIME,
            }
        ],
    },
        {
            sequelize,
            modelName: 'Court',
        });

    return Court
};