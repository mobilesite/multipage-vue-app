'use strict';

const mongoose = require('../database/mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let articleSchema = new Schema({
    publisher: {
        type: ObjectId,
        ref: 'User'
    },
    title: String,
    abstract: String,
    pv: {
        type: Number,
        default: 0
    },
    categories: [{
        type: ObjectId,
        ref: 'Category'
    }],
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

articleSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else {
        this.meta.updateAt = Date.now();
    }

    next();
});

articleSchema.statics = {
    getAll: function(cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb);
    },
    findById: function(id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb);
    }
};

const articleSchema = new Schema({
    title: String,
    content: String,
    abstract: String,
    createTime: String,
    lastEditTime: String,
    author: {type: ObjectId, ref: 'User'},
    tags: [{type: ObjectId, ref: 'Tag'}]
});

module.exports = articleSchema;
