const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./modules/user/route/user.router");
const blogsRouter = require("./modules/blogs/router/blogs.router");
const connection = require("./configration/db/db.connection");

const port=process.env.PORT || 444
const app = express();
connection();
// app.use(express.json());
app.use(bodyParser.json());
//app.use("*", userChek);
app.use(userRouter);
app.use(blogsRouter);
app.listen(port, () => {
  console.log(`running in ${port}`);
});
