const sequelize = require('../config/connection');
const seedPosts = require('./postsData');
const seedComments = require('./commentsData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedAll();
