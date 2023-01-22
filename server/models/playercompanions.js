'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class playerCompanions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      playerCompanions.belongsTo(models.heroes);
      // define association here
    }
  }
  playerCompanions.init({
    playerId: DataTypes.INTEGER,
    heroId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'playerCompanions',
  });
  return playerCompanions;
};