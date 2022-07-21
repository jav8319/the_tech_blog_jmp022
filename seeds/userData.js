const { User } = require('../models');

const userdata = [
    {
      username: "Saul",
      email: "sal@hotmail.com",
      password: "password12345"
    },
    {
      username: "Jeff",
      email: "lernantino@gmail.com",
      password: "password12345"
    },
    {
      username: "Andres",
      email: "amiko2k20@aol.com",
      password: "password12345"
    }
  ]

  const seedUser = () => User.bulkCreate(userdata);

  module.exports = seedUser;
  