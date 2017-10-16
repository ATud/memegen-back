'use strict';
module.exports  = function(sequelize, DataTypes) {
    const Posts = sequelize.define('Posts', {
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 500
        }
    },
        {
            timestamps: false
        }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return Posts;
};
