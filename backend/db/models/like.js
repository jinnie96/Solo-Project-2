'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    imageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.Image, { foreignKey: 'imageId' }),
    Like.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Like;
};
