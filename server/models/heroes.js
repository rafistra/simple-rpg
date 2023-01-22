'use strict';
const { encryptPwd } = require('../helpers/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class heroes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      heroes.hasOne(models.heroStats, {foreignKey: 'heroId'});
      heroes.belongsTo(models.classes);
      heroes.belongsTo(models.parties);
      heroes.hasMany(models.playerCompanions);
      // define association here
    }
  }
  heroes.init({
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    image: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    classId: DataTypes.INTEGER,
    partyId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(hero, options) {
        hero.password = encryptPwd(hero.password);
      }
    },
    sequelize,
    modelName: 'heroes',
  });
  return heroes;
};