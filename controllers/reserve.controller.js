const { Reserve } = require('../models');

class ReserveController {
    constructor() { }

    async create(reserve, userId) {
        reserve.idUser = userId;
        reserve.reserved = false;

        if (!reserve.courts && !reserve.courts.lengh) {
            throw 'La orden debe contener productos.';
        }

        let createReserve = await Reserve.create(reserve);

        for (let court of reserve.courts) {
            // console.log(court);
            await Reserve.create({
                idReserve: createReserve.id,
                idCourt: court.id,
                count: product.count
            });
        }
    };

    async getAll(userId, reserved) {

        if (reserved === null || reserved === undefined) {
            if (userId == null) {
                return Reserve.findAll();
            }

            return Reserve.findAll({
                where: { reserved }
            })
        };

        if (userId == null) {
            return Reserve.findAll({
                where: { reserved }
            })
        };

        return Reserve.findAll({
            where: {
                idUser: userId,
                reserved
            }
        });
    };

    async findById(id, userId) {

        if (userId == null) {
            return Reserve.findOne({
                where: { id }
            })
        };

        return Reserve.findOne({
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

        // if(reserve.reserved){
        //     throw 'No es posible eliminar las reservas caducadas'
        // };

        await Reserve.destroy({
            where: { idReserve: id }
        });

        return Reserve.destroy({
            where: { id }
        });
    };

};

let reserveController = new ReserveController;

module.exports = reserveController;