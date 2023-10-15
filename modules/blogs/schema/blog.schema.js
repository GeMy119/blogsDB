const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    title: { type: String },
    content: { type: String },
    blogImage: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);
module.exports = blogSchema;
