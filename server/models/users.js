'use strict';

module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("Users",  {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            length:256
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            length:256
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            length:500
        },
        avatarUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            length:500
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true

        }
    },
        {
            timestamps: false
        });


    return Users;
};