let express = require('express');
let router = express.Router();
let stringifyModel = require("../tools/stringifyResponse.js");

let AdminModel = require("../database/model/administrator.js");

//  路由必经路由
router.use((req, res, next) => {
  next();
});

//  登录接口
router.all('/login', (req, res) => {
  console.log(req.body);
  let { userCode = '', password = '' } = req.body;
  if (userCode === '') {
    res.json(stringifyModel.errorData('用户名不能为空'));
    return;
  }
  if (password === '') {
    res.json(stringifyModel.errorData('密码不能为空'));
    return;
  }
  AdminModel.findOne({
    userCode,
    password
  }, (err, admin) => {
    console.log(err);
    console.log(admin);
    if (err) {
      res.json(stringifyModel.errorData(err));
    } else {
      if (!!admin) {
        res.json(stringifyModel.okData([admin]));
      } else {
        res.json(stringifyModel.errorData('管理员不存在'));
      }
    }
  })
});

module.exports = router;