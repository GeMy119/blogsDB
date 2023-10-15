const blogsRouter = require("express").Router();
const validation = require("../../../configration/common/midelware/validation");
const isAuthorized = require("../../../configration/common/midelware/isAuthorized");
const { addBlogSchema, deleteBlogSchema } = require("../joi/blog.joi");
const {
  ADD_BLOG,
  GET_ALL_BLOGS,
  DELETE_BLOG,
  UPDATE_BLOG,
} = require("../endPoints/blog.endPoints");
const addBlog = require("../controller/addBlog");
const getAllBlogs = require("../controller/getAllBlogs");
const deleteBlog = require("../controller/deleteBlog");
const userChek = require("../../../configration/common/midelware/userChek");
const updateBlog = require("../controller/updateBlog");

blogsRouter.post(
  "/addBlog",
  isAuthorized(ADD_BLOG),
  validation(addBlogSchema),
  addBlog
);
blogsRouter.delete(
  "/deleteBlog/:id",
  validation(deleteBlogSchema),
  isAuthorized(DELETE_BLOG),
  userChek,
  deleteBlog
);
blogsRouter.put(
  "/updateBlog/:id",
  isAuthorized(UPDATE_BLOG),
  userChek,
  updateBlog
);
blogsRouter.get("/getAllBlogs",isAuthorized(GET_ALL_BLOGS),getAllBlogs)
module.exports = blogsRouter;
