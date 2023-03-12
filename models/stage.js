const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');

class Stage extends Model {}

Stage.init({
  // Model attributes are defined here
  stage_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  stage_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Stage', // We need to choose the model name
  tableName: 'stages',
});

module.exports = Stage;