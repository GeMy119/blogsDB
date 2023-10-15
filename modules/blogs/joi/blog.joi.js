const Joi = require("joi");

module.exports = {
  addBlogSchema: {
    body: Joi.object().required().keys({
      author: Joi.string().required(),
      title: Joi.string().required(),
      content: Joi.string().required(),
      blogImage: Joi.string(),
    }),
  },
  deleteBlogSchema: {
    params: Joi.object().required().keys({
      blogId: Joi.string().required(),
    }),
  },
};
