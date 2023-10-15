const statusCodes = require("http-status-codes");
const jwt = require("jsonwebtoken");
const rbac = require("../../rbac/rbac");
module.exports = (endPoint) => {
  return async (req, res, next) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      if (token) {
        const decodedToken = jwt.verify(token, "gemy");
        req.user = decodedToken;
        const isAllowed = await rbac.can(req.user.role, endPoint);
        if (isAllowed) {
          next();
          console.log("done auth");
        } else {
          res
            .status(statusCodes.UNAUTHORIZED)
            .json({ message: "UNAUTHORIZED" });
        }
      } else {
        res.status(statusCodes.UNAUTHORIZED).json({ message: "UNAUTHORIZED" });
      }
    } else {
      res.status(statusCodes.UNAUTHORIZED).json({ message: "UNAUTHORIZED" });
    }
  };
};
