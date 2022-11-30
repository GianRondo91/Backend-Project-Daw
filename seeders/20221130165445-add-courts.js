'use strict';

let courts = [
  {
    number: 1,
    category: "Padel",
    availability: true,
    time: [
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
    ]
  },
  {
    number: 2,
    category: "Padel",
    availability: true,
    time: [
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
    ]
  },
  {
    number: 3,
    category: "Padel",
    availability: true,
    time: [
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
    ]
  },
  {
    number: 4,
    category: "Padel",
    availability: true,
    time: [
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
    ]
  },
  {
    number: 5,
    category: "Tenis",
    availability: true,
    time: [
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
    ]
  },
  {
    number: 6,
    category: "Tenis",
    availability: true,
    time: [
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
    ]
  },
  {
    number: 7,
    category: "Tenis",
    availability: true,
    time: [
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
    ]
  },
  {
    number: 8,
    category: "Tenis",
    availability: true,
    time: [
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
    ]
  },
];

courts = courts.map((court) => ({ ...court, updatedAt: new Date, createdAt: new Date }));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courts', courts);
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
