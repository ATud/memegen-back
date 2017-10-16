'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            username: {
                type: Sequelize.STRING(256),
                unique: true,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(256),
                unique: true,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING(256),
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(500),
                allowNull: true
            },
            avatarUrl: {
                type: Sequelize.STRING(500),
                allowNull: true
            },
            age: {
                type: Sequelize.INTEGER,
                allowNull: true
            }
        });
    },

    down: function (queryInterface) {
        return queryInterface.dropTable('Users');
    }
};