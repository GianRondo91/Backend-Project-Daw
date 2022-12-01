'use strict';
const bcrypt = require('bcrypt');

const createUsers = async () => {

  let users = [
    {
      name: "Giancarlo",
      surname: "Rondo Santa cruz",
      email: "giancarlorondo@outlook.com",
      dni: "00000000G", 
      phone: 655555555,
      address: "calle 1",
      city: "Valencia",
      cp: 46002,
      password: await bcrypt.hash("Gian2022", 6),
      isAdmin: true
    },
    {
      name: "prueba",
      surname: "Inserto mi apellido",
      email: "prueba@prueba.com",
      dni: "00000000F",
      phone: 644444444,
      address: "calle 2",
      city: "Valencia",
      cp: 46010,
      password: await bcrypt.hash("Prueba2022", 6),
      isAdmin: false
    }
  ];

  return users.map((user) => ({ ...user, updatedAt: new Date, createdAt: new Date }));
}


/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', await createUsers());
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
