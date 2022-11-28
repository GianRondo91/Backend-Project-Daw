'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Reserve extends Model {
        static associate(models) {

            this.belongsTo(models.User, {
                foreignKey: 'idUser',
                targetKey: 'id',
            });
            this.belongsTo(models.Court, {
                foreignKey: 'idCourt',
                targetKey: 'id'
            });
        };
    };

    Reserve.init({
        date: DataTypes.DATE,
        time: DataTypes.TIME,
        court: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Reserve',
    });

    return Reserve;
};