const { Reserve } = require('../models');
const moment = require('moment');

class ReserveController {
    constructor() { }

    transformDate(reserve){
        if(!reserve){
            return reserve;
        }
        reserve = reserve.dataValues ?? reserve;
        reserve.date = moment.utc(reserve.date).format("YYYY-MM-DD");
        return reserve;
    }

    transformDates(reserves){
        if(!reserves){
            return reserves;
        }
        return reserves.map(this.transformDate);
    }

    async create(reserve, userId) {
        reserve.idUser = userId;

        const date = moment.utc(reserve.date, "YYYY-MM-DD");

        if (!reserve.idCourt 
            || !/\d{2}:[03]0/.test(reserve.time)
            || !date.isValid()) {
            throw 'La reserva es invalida';
        }

        var existingReserve = await Reserve.findOne({
            where: {
                idCourt: reserve.idCourt,
                time: reserve.time,
                date: date.toISOString()
            }
        });

        if(existingReserve){
            console.log(existingReserve);
            throw 'Ya existe una reserva para esos datos.';
        }

        return this.transformDate(await Reserve.create(reserve));
    };

    async getAll(userId) {
        if (userId == null) {
            return this.transformDates(await Reserve.findAll());
        }

        return this.transformDates(await Reserve.findAll({
            where: {idUser: userId}
        }));
    };

    async findById(id, userId) {

        if (userId == null) {
            return this.transformDate(await Reserve.findOne({
                where: { id }
            }));
        };

        return this.transformDate(await Reserve.findOne({
            where: {
                id,
                idUser: userId
            }
        }));
    };

    async delete(id, userId) {

        let reserve = this.findById(id, userId);

        if (!reserve) {
            throw 'Reserva inexistente'
        };

        return await Reserve.destroy({
            where: { id }
        });

    };

};

let reserveController = new ReserveController;

module.exports = reserveController;