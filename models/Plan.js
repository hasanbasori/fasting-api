module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define("Plan", {
    time: {
      type: DataTypes.ENUM,
      values: [
        "12/12",
        "16/8",
        "18/6",
        "20/4",
        "22/2",
        "23/1",
        "24",
        "48",
        "72",
      ],
    },
  });
  // Plan.associate = (models) => {
  //   Plan.belongsTo(models.User, {
  //     allowNull: false,

  //     onDelete: "RESTRICT",
  //     onUpdate: "RESTRICT",
  //   });
  // };

  return Plan;
};
