'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const userSchema = new Schema({
    username: {
        unique: true,
        type: String,
        required: [true, 'username不能为空'], //第二个参数是错误提示
        minlength: 6,                     //限定用户名的长度
        maxlength: 20
    },
    realName: String,
    password: String,
    role: {
        // 0: nomal user
        // 1: verified user
        // 2: professional user
        // >10: admin
        // >50: super admin
        type: Number,
        default: 0
    },
    mobile: {
        type: String,
        validate: {
            validator: (data) => {
                return /^\d{11}$/.test(data);
            },
            message: '{VALUE}不是合法的手机号！'  //VALUE代表mobile存放的值
        }
    },
    areaCode: String,
    verifyCode: String,
    verified: {
        type: Boolean,
        default: false
    },
    accessToken: String,
    gender: String,
    breed: String,
    age: {
        type: String,
        min: [0, '年龄过小'],
        max: [150, '年龄过大']
    },
    avatar: String,
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

userSchema.pre('save', function(next) {
    const user = this;

    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else {
        this.meta.updateAt = Date.now();
    };

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) {
            return next(err)
        };

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) {
                return next(err)
            };

            user.password = hash;
            next();
        });
    });
});

userSchema.methods = {
    comparePassword: function(_password, cb) {
        bcrypt.compare(_password, this.password, function(err, isMatch) {
            if (err) return cb(err);

            cb(null, isMatch);
        });
    }
};

userSchema.statics = {
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

module.exports = userSchema;
