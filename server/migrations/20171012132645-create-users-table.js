'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
                length:256
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
                length:256
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true,
                length:500
            },
            avatarUrl: {
                type: Sequelize.STRING,
                allowNull: true,
                length:500
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