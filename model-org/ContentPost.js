module.exports = (sequelize, DataTypes) => {
  const ContentPost = sequelize.define(
    "ContentPost",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contentImg: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
    },
    {
      tablename: "content-posts",
    }
  );

  // ContentPost.associate = (models) => {
  //   ContentPost.belongsTo(models.User, {

  //     allowNull: false,

  //     onDelete: "RESTRICT",
  //     onUpdate: "RESTRICT",
  //   });
  // };

  return ContentPost;
};
