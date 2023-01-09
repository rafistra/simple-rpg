'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class heroStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      heroStats.belongsTo(models.heroes);
      // define association here
    }
  }
  heroStats.init({
    hp: DataTypes.INTEGER,
    mgc: DataTypes.INTEGER,
    stam: DataTypes.INTEGER,
    str: DataTypes.INTEGER,
    def: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    dex: DataTypes.INTEGER,
    char: DataTypes.INTEGER,
    heroId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'heroStats',
  });
  return heroStats;
};