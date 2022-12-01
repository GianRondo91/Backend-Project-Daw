'use strict';

let courts = [
  {
    number: 1,
    category: "Padel",
    availability: true
  },
  {
    number: 2,
    category: "Padel",
    availability: true
  },
  {
    number: 3,
    category: "Padel",
    availability: true
  },
  {
    number: 4,
    category: "Padel",
    availability: true
  },
  {
    number: 5,
    category: "Tenis",
    availability: true
  },
  {
    number: 6,
    category: "Tenis",
    availability: true
  },
  {
    number: 7,
    category: "Tenis",
    availability: true
  },
  {
    number: 8,
    category: "Tenis",
    availability: true
  },
];

courts = courts.map((court) => ({ ...court, updatedAt: new Date, createdAt: new Date }));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Courts', courts);
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
