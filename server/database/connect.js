/**
 * Created by milon on 2017/10/14.
 */

const connect = () => {
    const DB_URL = 'mongodb://localhost:27017/paianblog';
    const mongoose = require('mongoose');

    mongoose.connect(DB_URL, { useMongoClient: true });

    const con = mongoose.connection;

    con.on('connected', () => {
        console.log('数据库连接成功: ' + DB_URL);
    });
    con.on('open', () => {
        console.log('数据库连接打开成功: ' + DB_URL);
    });
    con.on('error', (err) => {
        console.log('数据库连接异常: ' + err);
    });
    con.on('disconnected', () => {
        console.log('数据库连接断开');
    });
};

module.exports = connect;


