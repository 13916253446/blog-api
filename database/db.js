let mongoose = require('mongoose');

let db = mongoose.connect('mongodb://203.195.201.252:27017/blog');

let connection = mongoose.connection;

connection.on('error', () => {
  console.error('数据库连接错误');
});

connection.once('open', () => {
  console.log('数据库已打开');
});

module.exports = mongoose;