const statusCodes = require("http-status-codes");
const Blog = require("../model/blog.model");

const getAllBlogs = async (req, res) => {
  let { page, size } = req.query;
  try {
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 10;
    }
    const limit = parseInt(size);
    const skip = (page - 1) * size;
    //console.log(limit , skip)
    const allBlogs = await Blog.find({})
      .populate("author", "userName email")
      .limit(limit)
      .skip(skip);
    const all = await Blog.count();
    const allPages = Math.ceil(all / limit);
    //console.log(allPages);
    res
      .status(statusCodes.OK)
      .json({ message: "all blogs", page, size, allPages, data: allBlogs });
  } catch (error) {
    res.json({ message: "error", error });
  }
};
module.exports = getAllBlogs;
