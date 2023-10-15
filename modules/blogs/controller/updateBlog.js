const statusCodes = require("http-status-codes");
const Blog = require("../model/blog.model");
const updateBlog = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const update = await Blog.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(statusCodes.OK).json({ message: "updated", update });
  } catch (error) {
    res.status(statusCodes.BAD_REQUEST).json({ message: error });
  }
};
module.exports = updateBlog;
