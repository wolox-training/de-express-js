'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        id_role: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 2
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.STRING,
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
        queryInterface.addConstraint('users', {
          fields: ['id_role'],
          type: 'FOREIGN KEY',
          name: 'FK_users_roles',
          references: {
            table: 'roles',
            field: 'id'
          },
          onDelete: 'no action',
          onUpdate: 'no action'
        })
      ),
  down: queryInterface => queryInterface.dropTable('users')
};
