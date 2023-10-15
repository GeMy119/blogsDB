const statusCodes = require("http-status-codes");
const Blog = require("../model/blog.model");

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    // const token = req.headers.authorization.split(" ")[1];
    // const decoded = jwt.verify(token, "gemy");
    // const userId = decoded.id;
    // console.log(userId);
    // const blog = await Blog.findOne({ _id: blogId });
    // if (blog) {
    //   if (blog.author == userId) {
    await Blog.deleteOne({ _id: blogId });
    res.status(statusCodes.OK).json({ message: "blog deleted done" });
    // } else {
    //   res
    //     .status(statusCodes.UNAUTHORIZED)
    //     .json({ message: "thats not your blog you can not delete it :|" });
    // }
    // } else {
    //   res.status(statusCodes.BAD_REQUEST).json({ message: "blog not founded" });
    // }
  } catch (error) {
    res.status(statusCodes.BAD_REQUEST).json({ message: "error", error });
  }
};

module.exports = deleteBlog;
