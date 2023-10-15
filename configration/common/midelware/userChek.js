const statusCodes = require("http-status-codes");
const Blog = require("../../../modules/blogs/model/blog.model");
const jwt = require("jsonwebtoken");
const userChek = async (req, res, next) => {
  const blogId = req.params.id;
  const token = req.headers.authorization.split(" ")[1];
  //console.log(token);
  try {
    const decodedToken = jwt.verify(token, "gemy");
    const blog = await Blog.findOne({ _id: blogId });
    if (blog) {
      if (decodedToken.id == blog.author || decodedToken.role == "admin") {
        next();
      } else {
        res
          .status(statusCodes.UNAUTHORIZED)
          .json({ message: "thats not your blog :|" });
      }
    } else {
      res.status(statusCodes.BAD_REQUEST).json({ message: "blog not founded" });
    }
  } catch (error) {
    res.status(statusCodes.BAD_REQUEST).json({ message: "error", error });
  }
};
module.exports = userChek;
