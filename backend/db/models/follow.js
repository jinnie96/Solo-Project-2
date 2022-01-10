'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    followerId: DataTypes.INTEGER,
    followeeId: DataTypes.INTEGER
  }, {});
  Follow.associate = function(models) {
    Follow.belongsTo(models.User, { foreignKey: 'followerId' }),
    Follow.belongsTo(models.User, { foreignKey: 'followeeId' })
  };
  return Follow;
};
