const statusCodes = require("http-status-codes");
const User = require("../model/user.model");

const getAllUsers = async (req, res) => {
  try {
    const { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 10;
    }
    const limit = parseInt(size);
    const skip = (page - 1) * size;
    const users = await User.find({}).limit(limit).skip(skip);
    const all = await users.count();
    const allPages = Math.ceil(all / limit);
    res
      .status(statusCodes.OK)
      .json({ message: "all users", page, size, allPages, data: users });
  } catch (error) {
    res.json({ message: "error", error });
  }
};
module.exports = getAllUsers;
