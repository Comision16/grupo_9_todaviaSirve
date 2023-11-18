"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          lastName: "todaviaSirve",
          email: "admin@gmail.com",
          password:
            "$2a$10$XTKMUTScdn6EH4lgdzUt6unZM/hiz4lN792TjO9oORLwj1klCuUTm",
          birthdate: null,
          roleId: 1,
          addressId:1,
          avatar: "user1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            name: "user",
            lastName: "todaviaSirve",
            email: "user@gmail.com",
            password:
              "$2a$10$XTKMUTScdn6EH4lgdzUt6unZM/hiz4lN792TjO9oORLwj1klCuUTm",
            birthdate: null,
            avatar: "user3.jpg",
            roleId: 2,
            addressId:2,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
