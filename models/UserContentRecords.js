module.exports = (sequelize, DataTypes) => {
  const UserContentRecords = sequelize.define(
    "UserContentRecords",
    {
      history: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.ENUM,
        values: ["HAPPY", "NEUTRAL", "BAD"],
        allowNull: false,
      },
      readLater: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  return UserContentRecords;
};
