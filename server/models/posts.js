'use strict';
module.exports = (sequelize, Sequelize) =
>
{
    var Posts = sequelize.define('Posts', {
        url: {
            type: Sequelize.STRING,
            allowNull: false,
            length: 500
        }
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return Posts;
}
;