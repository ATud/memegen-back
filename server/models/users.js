'use strict';
module.exports = (sequelize, Sequelize) => {
  var Users = sequelize.define('Users', {
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
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};