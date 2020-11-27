'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('weets', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        }
      })
      .then(() =>
        queryInterface.addConstraint('weets', {
          fields: ['user_id'],
          type: 'FOREIGN KEY',
          name: 'FK_weets_users',
          references: {
            table: 'users',
            field: 'id'
          },
          onDelete: 'no action',
          onUpdate: 'no action'
        })
      ),
  down: queryInterface => queryInterface.dropTable('weets')
};
