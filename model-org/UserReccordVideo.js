module.exports = (sequelize, DataTypes) => {
  const userReccordVideo = sequelize.define(
    "UserReccordVideo",
    {
      history: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.STRING,

        allowNull: false,
      },
      watchLater: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  return userReccordVideo;
};
