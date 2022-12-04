const { Court, Reserve } = require('../models');
const moment = require('moment');

class CourtController {
    constructor() { }

    transformDate(reserve){
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

    async getAll(category) {

        let courts = null;

        if (category) {
            courts = await Court.findAll({
                where: { category }
            });
        } else {
            courts = await Court.findAll();
        }

        courts = courts.map(court => court.dataValues);

        courts.forEach(court => {
            court.times = [
                {
                    hour: "09:00",
                },
                {
                    hour: "10:30",
                },
                {
                    hour: "12:00",
                },
                {
                    hour: "18:00",
                },
                {
                    hour: "19:30",
                },
                {
                    hour: "21:00",
                }
            ];
        });

        return courts;
    };

    async getReserves(courtId, date) {
        
        if(!date){
            return this.transformDates(await Reserve.findAll({
                where: {
                    idCourt: courtId
                }
            }));
        }

        date = moment.utc(date, "YYYY-MM-DD");

        return this.transformDates(await Reserve.findAll({
            where: {
                idCourt: courtId,
                date: date.toISOString()
            }
        }));
    };
};

let courtController = new CourtController;

module.exports = courtController;