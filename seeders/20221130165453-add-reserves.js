'use strict';

let reserves = [
  {
    idUser: 11,
    idCourt: 11,
    date: "2022.12.27",
    time: "09:00"
 },
  {
    idUser: 11,
    idCourt: 31,
    date: "2022.12.15",
    time: "12:00"
  },
  {
    idUser: 1,
    idCourt: 41,
    date: "2022.12.29",
    time: "18:00"
  },
  {
    idUser: 1,
    idCourt: 71,
    date: "2022.12.20",
    time: "21:00"
  },
];

reserves = reserves.map((reserve) => ({...reserve, updatedAt: new Date, createdAt: new Date}))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reserves', reserves);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
