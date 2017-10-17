'use strict';

const mongoose = require('../database/mongoose');
const articleSchema = require('../schemas/article');
//注意这里model不能先存成一个变量再调用，否则会导致this指向错误，详见：https://github.com/Automattic/mongoose/issues/3768#issuecomment-178313121
// if (!this.modelSchemas[name]) {
//TypeError: Cannot read property 'modelSchemas' of undefined

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
