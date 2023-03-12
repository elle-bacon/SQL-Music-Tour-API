const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');

class Band extends Model {}

Band.init({
  // Model attributes are defined here
  band_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.TEXT,
    // allowNull defaults to true
  },
  available_start_time: {
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
  modelName: 'Band', // We need to choose the model name
  tableName: 'bands',
});

// the defined model is the class itself
// console.log(Band === sequelize.models.Band); // true

module.exports = Band;