let express = require('express');
let app = express();
let bodyParser = require("body-parser");

//  链接数据库
let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://203.195.201.252:27017/blog');
let connection = mongoose.connection;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

//  json数据转换中间件
app.use(bodyParser.urlencoded({ extended: true }));


//  操作管理员路由
let administrator = require('./routes/administrators.js');
app.use('/administrator', administrator);

connection.on('error', () => {
  console.error('数据库连接错误');
});

connection.once('open', () => {
  const server = app.listen(3000, () => {
    let address = server.address().address;
    let port = server.address().port;
    console.log(`服务器启动${address}:${port}`);
  });
});