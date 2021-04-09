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
      age: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileImg: DataTypes.STRING,

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      goal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    {
      underscored: true,
    }
  );

//   User.associate = (models) => {
//     User.hasMany(models.Post, {
//       foreignKey: {
//         name: "userId",
//         allowNull: false,
//       },
//       onDelete: "RESTRICT",
//       onUpdate: "RESTRICT",
//     });
//     User.hasMany(models.Friend, {
//       as: "RequestTo",
//       foreignKey: {
//         name: "requestToId",
//         allowNull: false,
//         // field: 'request_to'
//       },
//       onDelete: "RESTRICT",
//       onUpdate: "RESTRICT",
//     });
//     User.hasMany(models.Friend, {
//       as: "RequestFrom",
//       foreignKey: {
//         name: "requestFromId",
//         allowNull: false,
//         // field: 'request_from'
//       },
//       onDelete: "RESTRICT",
//       onUpdate: "RESTRICT",
//     });
//   };

  return User;
};
