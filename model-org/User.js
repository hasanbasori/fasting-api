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
      birtDate: { 
        type: DataTypes.DATE,
        allowNull: false,
      },
      profileImg: DataTypes.STRING,

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

  User.associate = (models) => {
    User.hasMany(models.Plan, {
      allowNull: false,

      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    User.hasMany(models.UserReccord, {
      foreignKey: {
        name: "requestToId",
        allowNull: false,
        // field: 'request_to'
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    User.hasMany(models.ContentPost, {
      allowNull: false,
      // field: 'request_from'

      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    User.hasMany(models.VideoPost, {
      allowNull: false,
      // field: 'request_from'

      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return User;
};
