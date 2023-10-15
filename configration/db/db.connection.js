const mongoose = require("mongoose");

const connection = () => {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/blogsDB")
    .then((result) => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("error", err);
    });
};
module.exports = connection;
