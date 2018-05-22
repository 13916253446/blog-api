let express = require('express');

let router = express.Router();

let db = require('../database/db.js');

//  路由必经路由
router.use((req, res, next) => {
  next();
});

router.get('/login', (req, res) => {
  console.log(JSON.stringify(req.body));
  res.send('123');
});

module.exports = router;