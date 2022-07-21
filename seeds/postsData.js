const { Posts } = require('../models');

const postsdata = [
  {
    title: "CSS disadvanteges",
    post_content: "With CSS, what works with one browser might not always work with another. The web developers need to test for compatibility, running the program across multiple browsers. There exists a scarcity of security.",
    user_id: 1
  },

  {
    title: "How Hard Is It to Become a Web Developer?",
    post_content: "While learning the foundational skills to become a Web Developer is relatively straightforward, becoming a good Web Developer can be more challenging, requiring ongoing learning and effort over years.",
    user_id: 2
  },

  {
    title: "Three.js for videogame design",
    post_content: "For 3d projects, experts suggest using a library like Three.js in order to get used to the terms and the general 3d model.",
    user_id: 3
  }
];

const seedPosts = () => Posts.bulkCreate(postsdata);

module.exports = seedPosts;
