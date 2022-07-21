const { Comments } = require('../models');

const commentsdata = [
  {
    comment_content: "Not only that, let say you run a website with 40 pages and want to make a change, it wil take for ever",
    comment_by: "Andres",
    post_id: 1,
    commentuser_id: 1
  },

  {
    comment_content: "CSS changes are device-friendly. Usually, websites based on CSS serve to make your web pages more adaptive",
    comment_by: "Andres",
    post_id: 1,
    commentuser_id: 1
  },

  {
    comment_content: "Implementing initial CSS changes on a website is accessible on the developers end. However, you will have to confirm the compatibility if the CSS displays similar change effects on all the browsers.",
    comment_by: "Jeff",
    post_id: 1,
    commentuser_id: 1
  },

  {
    comment_content: "Web development isnt hard in the sense that you dont need to be a genius or a math wiz to be a Web Developer, but an eye for detail is key.",
    comment_by: "saul",
    post_id: 2,
    commentuser_id: 2
  },

  {
    comment_content: "As many Web Developers will tell you, though, it's well worth the effort — a web development career can be an extremely fulfilling and well-paying career",
    comment_by: "Andres",
    post_id: 2,
    commentuser_id: 2
  },

  {
    comment_content: "The set of built-in features is extensive, and includes:renderers (Canvas, WebGL, and SVG)",
    comment_by: "Jeff",
    post_id: 3,
    commentuser_id: 3
  },


];

  const seedComments = () => Comments.bulkCreate(commentsdata);
  
  module.exports = seedComments;
  

