module.exports = (sequelize, DataTypes) => {
  const UserReccord = sequelize.define(
    "UserReccord",
    {
      totalFast: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      WeeklyFastAvg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      longestFast: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      longestStreak: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      currentStreak: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      totalHour: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  return UserReccord;
};
