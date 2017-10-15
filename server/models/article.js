'use strict';

const mongoose = require('../database/mongoose');
const model = mongoose.model;
const articleSchema = require('../schemas/article');
const Article = model('Article', articleSchema);

module.exports = Article;
