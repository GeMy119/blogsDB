const {
  ADD_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG,
} = require("../../../modules/blogs/endPoints/blog.endPoints");
const {
  GET_ALL_USERS,
} = require("../../../modules/user/endPoints/endPoints.user");

module.exports = [GET_ALL_USERS, ADD_BLOG, DELETE_BLOG, UPDATE_BLOG];
