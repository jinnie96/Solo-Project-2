'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, { foreignKey: 'userId' })
    Image.belongsTo(models.Album, { foreignKey: 'albumId' }),
    Image.hasMany(models.Like, { foreignKey: 'imageId' })
    Image.hasMany(models.Comment, { foreignKey: 'imageId' })
  };
  return Image;
};
