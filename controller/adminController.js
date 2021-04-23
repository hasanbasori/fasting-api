const { ContentPost, VideoPost } = require("../models");

exports.getAllVideos = async (req, res, next) => {
  try {
    const videos = await VideoPost.findAll();
    res.status(200).json({ videos });
  } catch (err) {
    next(err);
  }
};

exports.getVideo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const video = await VideoPost.findOne({
      where: { id: id },
    });
    res.status(200).json({ video });
  } catch (err) {
    next(err);
  }
};

exports.createVideo = async (req, res, next) => {
  const { title, link, description } = req.body;
  try {
    const createVideo = await VideoPost.bulkCreate([
      { title: title },
      { link: link },
      { description: description },
    ]);
  } catch (err) {
    next(err);
  }
};

exports.updateVideo = async (req, res, next) => {
  const { title, link, description } = req.body;
  const { id } = req.params;
  try {
    const updateVideo = await VideoPost.update(
      { title: title, link: link, description: description },
      { where: { id: id } }
    );
    res.status(200).json({ message: "Video Updated" });
  } catch (err) {
    next(err);
  }
};

exports.deleteVideo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await VideoPost.destroy({ where: { id: id } });
    res.status(200).json({ message: "deleted" });
  } catch (err) {
    next(err);
  }
};

//--
exports.getAllContents = async (req, res, next) => {
  try {
    const contents = await ContentPost.findAll();
    res.status(200).json({ contents });
  } catch (err) {
    next(err);
  }
};

exports.getContent = async (req, res, next) => {
  const { id } = req.params;
  try {
    const content = await ContentPost.findOne({
      where: { id: id },
    });
    res.status(200).json({ content });
  } catch (err) {
    next(err);
  }
};

exports.createContent = async (req, res, next) => {
  const { title, contentImg, description } = req.body;
  try {
    const createContent = await ContentPost.bulkCreate([
      { title: title },
      { contentImg: contentImg },
      { description: description },
    ]);
  } catch (err) {
    next(err);
  }
};

exports.updateContent = async (req, res, next) => {
  const { title, contentImg, description } = req.body;
  const { id } = req.params;
  try {
    const updateContent = await ContentPost.update(
      { title: title, contentImg: contentImg, description: description },
      { where: { id: id } }
    );
    res.status(200).json({ message: "Content Updated" });
  } catch (err) {
    next(err);
  }
};

exports.deleteContent = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await ContentPost.destroy({ where: { id: id } });
    res.status(200).json({ message: "deleted" });
  } catch (err) {
    next(err);
  }
};
