
//const SequelizeLibrary = require('sequelize');
//const Sequelize = SequelizeLibrary.Sequelize;

// models/user.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // database configuration

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;    


