'use strict';

let reserves = [
  {
    idUser: 2,
    idCourt: 2,
    date: "2022.12.27",
    time: "09:00",
    reserved: true
 },
  {
    idUser: 2,
    idCourt: 4,
    date: "2022.12.15",
    time: "12:00",
    reserved: true,
  },
  {
    idUser: 1,
    idCourt: 5,
    date: "2022.12.29",
    time: "18:00",
    reserved: true,
  },
  {
    idUser: 1,
    idCourt: 8,
    date: "2022.12.20",
    time: "21:00",
    reserved: true,
  },
];

reserves = reserves.map((reserve) => ({...reserve, updatedAt: new Date, createdAt: new Date}))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reserves', reserves);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
