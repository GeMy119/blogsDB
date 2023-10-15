const statusCodes = require("http-status-codes");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

const userVerify = async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, "gemy");
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "email is not found" });
    } else {
      const update = User.updateOne(
        { email: decoded.email },
        { verifiy: true }
      );
      res
        .status(statusCodes.OK)
        .json({ message: "email verified done", update });
    }
  } catch (error) {
    res.status(statusCodes.BAD_REQUEST).json({ message: error });
  }
};

module.exports = userVerify;
