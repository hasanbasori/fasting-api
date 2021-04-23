module.exports = (sequelize, DataTypes) => {
  const UserReccords = sequelize.define(
    "UserReccords",
    {
      totalFast: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      emotion: {
        type: DataTypes.ENUM,
        values: ["HAPPY", "NEUTRAL", "BAD"],
        allowNull: false,
      },
      note: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalHour: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0,
      },
      startFast: DataTypes.DATETIME,
      endFast: DataTypes.DATETIME,
    },
    {
      underscored: true,
    }
  );
  UserReccords.associate = (models) => {
    Plan.belongsTo(models.User, {
      allowNull: false,

      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return UserReccords;
};
