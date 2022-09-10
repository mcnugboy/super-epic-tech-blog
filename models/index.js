const User = require('./User.js');
const Post = require('./Post.js');
const Comment = require('./Comment.js');
const { INITIALLY_DEFERRED } = require('sequelize/types/deferrable.js');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Comment,
    Post
};
