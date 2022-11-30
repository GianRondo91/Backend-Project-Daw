const { Court } = require('../models/court');

class CourtController {
    constructor() {}

    async getAll(type){
        if(type){
            return Court.findAll({
                where: {type}
            })
        }

        return Court.findAll();
    }
};

let courtController = new CourtController;

module.exports = courtController;