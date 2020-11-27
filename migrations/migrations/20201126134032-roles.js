'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('roles', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        label: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        }
      })
      .then(() =>
        queryInterface.bulkInsert('roles', [
          {
            label: 'admin',
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            label: 'user',
            created_at: new Date(),
            updated_at: new Date()
          }
        ])
      ),
  down: queryInterface => queryInterface.dropTable('profiles')
};
