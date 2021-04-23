module.exports = (sequelize, DataTypes) => {
  const UserReccordVideo = sequelize.define(
    "UserReccordVideo",
    {
      history: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.STRING,  //ENUM

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

  return UserReccordVideo;
};
