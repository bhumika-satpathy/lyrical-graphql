const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  songs.init({
    songId: DataTypes.STRING,
    title: DataTypes.STRING,
    lyrics: DataTypes.ARRAY(DataTypes.NUMBER),
  }, {
    sequelize,
    modelName: 'songs',
  });
  return songs;
};
