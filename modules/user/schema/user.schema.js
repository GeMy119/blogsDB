const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    rePassword: { type: String, required: true },
    role: { type: String, default: "user" },
    age: { type: Number, required: true },
    verifiy: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = userSchema;
