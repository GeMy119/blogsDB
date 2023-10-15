const statusCodes = require("http-status-codes");
const User = require("../model/user.model");
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const user = await User.find({ id });
    if (!user) {
      res.status(statusCodes.BAD_REQUEST).json({ message: "user not founded" });
    } else {
      const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
        new: true,
      }).select("-password -rePassword");
      res.status(statusCodes.OK).json({ message: "updated", updatedUser });
    }
  } catch (error) {
    res.json({ message: "error", error });
  }
};
module.exports = updateUser;
