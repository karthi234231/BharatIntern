const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: String,
  author: String,
  image: String, // Store the image URL or path here
  // Other fields...
  content: String,
  email: String

});

const BlogPost = mongoose.model('Blogpost', blogPostSchema);

//exporting blog
module.exports = BlogPost;