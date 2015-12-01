
var mongoose = require('mongoose');

var schema = mongoose.Schema({
  title: {type: String, default: ""},
  body: {type: String, default: ""},
  author: {type: Number, default: 6}
});

var Post = mongoose.model('posts', schema);
module.exports = Post;

