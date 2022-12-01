const { Reserve } = require('../models');

class ReserveController {
    constructor() { }

    async create(reserve, userId) {
        reserve.idUser = userId;

        if (!reserve.idCourt 
            || !/\d{2}:[03]0/.test(reserve.time)
            || !/\d{4}\.\d{2}\.\d{2}/.test(reserve.date)) {
            throw 'La reserva es invalida';
        }

        var existingReserve = await Reserve.findOne({
            where: {
                idCourt: reserve.idCourt,
                time: reserve.time,
                date: reserve.date
            }
        });

        if(existingReserve){
            console.log(existingReserve);
            throw 'Ya existe una reserva para esos datos.';
        }

        return await Reserve.create(reserve);
    };

    async getAll(userId, date) {

        if (!date) {
            if (userId == null) {
                return await Reserve.findAll();
            }

            return await Reserve.findAll({
                where: {idUser: userId}
            })
        };

        //date = date.replace("-", ".");

        if (userId == null) {
            return await Reserve.findAll({
                where: { date }
            });
        };

        return await Reserve.findAll({
            where: {
                idUser: userId,
                date
            }
        });
    };

    async findById(id, userId) {

        if (userId == null) {
            return await Reserve.findOne({
                where: { id }
            })
        };

        return await Reserve.findOne({
            where: {
                id,
                idUser: userId
            }
        });
    };

    /*
    async update(reserve, id, userId) {

        if (userId == null) {
            return Reserve.update(
                reserve,
                {
                    where: { id }
                }

            )
        };

        return Reserve.update(
            reserve,
            {
                where: {
                    id,
                    idUser: userId
                }
            }
        );
    };
*/
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