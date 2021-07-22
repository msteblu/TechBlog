const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models");
const userData = require("./userData.json");
const blogData = require("./blogData.json");
const commentData = require("./commentData.json");
const blogs = [];
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  for (const blog of blogData) {
    const blogAdded = await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    blogs.push(blogAdded);
  }
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      blog_id: blogs[Math.floor(Math.random() * blogs.length)].id,
    });
  }
  process.exit(0);
};
seedDatabase();
