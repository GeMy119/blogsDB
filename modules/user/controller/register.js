const bcrypt = require("bcrypt");
const statusCodes = require("http-status-codes");
//const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
//const transporter = require("../../../configration/nodeMailer/nodeMailer");

const register = async (req, res) => {
  try {
    const { userName, email, password, rePassword, age } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "email is already registerd" });
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
        if (err) throw err;
        let newUser = new User({
          userName,
          email,
          password: hash,
          rePassword: hash,
          age,
        });
        await newUser.save();
        // const token = jwt.sign({ email }, "gemy");
        // let info = await transporter.sendMail({
        //   from: "mahmoud.gamal1191998",
        //   to: `${email}`,
        //   text: "verifiy your account",
        //   html: `<div>
        //   <b>click</b>
        //   <a href="http://localhost:4444/userVerify/${token}">verifiy</a>
        //   </div>`,
        // });
        res
          .status(statusCodes.CREATED)
          .json({ message: "user register succes" });
      });
    }
  } catch (error) {
    res.json({ message: "error", error });
  }
};

module.exports = register;
