'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        albumId: null,
        imageUrl: `https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&w=1000&q=80`,
        description:"My majestic Zebra",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: null,
        imageUrl: `https://thumbor.forbes.com/thumbor/711x533/https://specials-images.forbesimg.com/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?fit=scale`,
        description:"My monkey wondering what he's going to eat today",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: null,
        imageUrl: `https://i.insider.com/5c79a8cfeb3ce837863155f5?width=750&format=jpeg&auto=webp`,
        description:"My pet squirrel got scared",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: null,
        imageUrl: `https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1136&format=jpeg`,
        description:"My dog having fun in the park!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: null,
        imageUrl: `https://awionline.org/sites/default/files/styles/homepage_header_rotator/public/slide/image/bcpsa.jpg?itok=RlPsdpoT`,
        description:"Cool lion I saw at the zoo!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};

