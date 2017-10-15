'use strict';

const mongoose = require('../database/db');
const model = mongoose.model;
const categorySchema = require('../schemas/category');
const Category = model('Category', categorySchema);

module.exports = Category;
