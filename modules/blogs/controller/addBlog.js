const statusCodes = require("http-status-codes");
const Blog = require("../model/blog.model");
const addBlog = async (req, res) => {
  const { author, title, content,  } = req.body;
  console.log(req.body);
  try {
    const newBlog = new Blog({
      author,
      title,
      content,
    });
    await newBlog.save();
    res.status(statusCodes.CREATED).json({ message: "blog created done" });
    //console.log(req.body);
  } catch (error) {
    res.status(statusCodes.BAD_REQUEST).json({ message: "error", error });
  }
};
module.exports = addBlog;
