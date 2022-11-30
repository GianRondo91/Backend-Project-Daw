'use strict';
const bcrypt = require('bcrypt');

let users = [
  {
    name: "Giancarlo",
    surname: "Rondo Santa cruz",
    email: "giancarlorondo@outlook.com",
    dni: "00000000G",
    phone: 6555555555,
    address: "calle 1",
    city: "Valencia",
    cp: 46002,
    password: bcrypt.hash("Gian2022", 6),
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
    password: bcrypt.hash("Prueba2022", 6),
    isAdmin: false
  }
];

users =  users.map((user) => ({...user, updatedAt: new Date, createdAt: new Date}));

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', users);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
