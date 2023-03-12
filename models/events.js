const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');

class Event extends Model {}

Event.init({
  // Model attributes are defined here
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    // allowNull defaults to true
  },
  start_time: {
    type: DataTypes.DATE,
    // allowNull defaults to true
  },
  end_time: {
    type: DataTypes.DATE,
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Event', // We need to choose the model name
  tableName: 'events',
});

module.exports = Event;