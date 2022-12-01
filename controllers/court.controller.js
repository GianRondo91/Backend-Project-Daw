const { Court } = require('../models');

class CourtController {
    constructor() { }

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
};

let courtController = new CourtController;

module.exports = courtController;