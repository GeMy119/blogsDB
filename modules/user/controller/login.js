const bcrypt = require("bcrypt");
const statusCodes = require("http-status-codes");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "email is not founded" });
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign(
          {
            id: user._id,
            userName: user.userName,
            role: user.role,
          },
          "gemy"
        );
        res
          .status(statusCodes.OK)
          .json({ massage: `hello ${user.userName}`, token });
      } else {
        res
          .status(statusCodes.BAD_REQUEST)
          .json({ message: "password in incorrect" });
      }
    }
  } catch (error) {
    res.json({ message: "error", error });
  }
};
module.exports = logIn;
