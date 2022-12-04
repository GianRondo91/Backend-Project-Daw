'use strict';

let courts = [
  {
    number: 1,
    category: "Padel",
    imageUrl: "/images/padel-uno.jpg",
    availability: true
  },
  {
    number: 2,
    category: "Padel",
    imageUrl: "/images/padel-dos.jpg",
    availability: true
  },
  {
    number: 3,
    category: "Padel",
    imageUrl: "/images/padel-tres.jpg",
    availability: true
  },
  {
    number: 4,
    category: "Padel",
    imageUrl: "/images/padel-cuatro.jpeg",
    availability: true
  },
  {
    number: 5,
    category: "Tenis",
    imageUrl: "/images/tenis-uno.jpg",
    availability: true
  },
  {
    number: 6,
    category: "Tenis",
    imageUrl: "/images/tenis-dos.jpg",
    availability: true
  },
  {
    number: 7,
    category: "Tenis",
    imageUrl: "/images/tenis-tres.jpg",
    availability: true
  },
  {
    number: 8,
    category: "Tenis",
    imageUrl: "/images/tenis-cuatro.jpg",
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
