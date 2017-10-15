'use strict';

const mongoose = require('../database/mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let commentSchema = new Schema({
    article: {type: ObjectId, ref: 'Article'},
    content: String,
    from: {type: ObjectId, ref: 'User'},
    to: {type: ObjectId, ref: 'User'},
    replies: [{
        from: {type: ObjectId, ref: 'User'},
        to: {type: ObjectId, ref: 'User'},
        content: String
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

commentSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else {
        this.meta.updateAt = Date.now();
    }

    next();
});

commentSchema.statics = {
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

module.exports = commentSchema;
