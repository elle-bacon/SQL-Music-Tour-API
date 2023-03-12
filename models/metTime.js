const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');
const { Band, Event, Stage } = require('./index');

class SetTime extends Model {}

SetTime.init({
  // Model attributes are defined here
  set_time_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  band_id: {
    type: DataTypes.INTEGER,

    references: {
      // This is a reference to another model
      model: Band,

      // This is the column name of the referenced model
      key: 'band_id',

      // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
      deferrable: Deferrable.INITIALLY_IMMEDIATE
      // Options:
      // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
      // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
      // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
    }
  },
  event_id: {
    type: DataTypes.INTEGER,

    references: {
      // This is a reference to another model
      model: Event,

      // This is the column name of the referenced model
      key: 'event_id',

      // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
      deferrable: Deferrable.INITIALLY_IMMEDIATE
      // Options:
      // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
      // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
      // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
    }
  },
  stage_id: {
    type: DataTypes.INTEGER,

    references: {
      // This is a reference to another model
      model: Stage,

      // This is the column name of the referenced model
      key: 'stage_id',

      // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
      deferrable: Deferrable.INITIALLY_IMMEDIATE
      // Options:
      // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
      // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
      // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
    }
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
  modelName: 'SetTime', // We need to choose the model name
  tableName: 'set_times',
});

module.exports = SetTime;