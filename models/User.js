module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      userType: {
        type: DataTypes.ENUM,
        values: ["ADMIN", "USER"],
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  return User;
};
