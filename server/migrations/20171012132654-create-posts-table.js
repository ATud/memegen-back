'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Posts', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            url: {
                type: Sequelize.STRING(500),
                allowNull: false
            }

        });
    },

    down: function (queryInterface) {
        return queryInterface.dropTable('Posts');
    }
};