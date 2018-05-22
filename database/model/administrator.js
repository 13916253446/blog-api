let mongoose = require("mongoose");

let adminScheme = require("../schemes/administrator.js");

let AdminModel = mongoose.model('Administrator', adminScheme);


module.exports = AdminModel;