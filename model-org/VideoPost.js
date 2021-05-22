module.exports = (sequelize, DataTypes) => {
  const VideoPost = sequelize.define(
    "VideoPost",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
      },
    },
    {
      tablename: "video-posts",
    }
  );
  // VideoPost.associate = (models) => {
  //   Plan.belongsTo(models.User, {
  //     allowNull: false,

  //     onDelete: "RESTRICT",
  //     onUpdate: "RESTRICT",
  //   });
  // };

  return VideoPost;
};
