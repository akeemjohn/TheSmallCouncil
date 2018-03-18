'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const PostSchema = new mongoose.Schema({
  author: {type: String, required: true},
  title: {type: String, required: true},
  content: {type: String, required: true},
  publishedAt: {type: Date, default: Date.now},
  category: {type: String},
  comments: [{
    author: {type: String, required: true},
    content: {type: String, required: true},
    publishedAt: {type: Date, default: Date.now}
  }]
});

PostSchema.methods.apiRepr = function(){
  return {
    id: this._id,
    author: this.author,
    title: this.title,
    content: this.content,
    comments: this.comments,
    publishedAt: this.publishedAt
  }
};

let Post = mongoose.model('Post', PostSchema);

module.exports = {Post};