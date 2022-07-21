const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');
const { hasMany } = require('./User');

Posts.hasMany(Comments, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(Posts, {
  foreignKey: 'post_id',
});

User.hasMany(Comments, {
  foreignKey: 'commentuser_id',
 
  
});

User.hasMany(Posts, {
  foreignKey: 'User_id',
  
});

Posts.belongsTo(User, {
  foreignKey: 'user_id',
  
});





module.exports = { User, Posts, Comments};
