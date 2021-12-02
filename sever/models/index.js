const mongoose = require("mongoose");
// all executed methods log output to console
mongoose.set("debug",true);
//define promise type
mongoose.Promise = Promise;
//connection
mongoose.connect("mongodb://localhost/website",{
    keepAlive:true,
    useMongoClient:true
});

module.exports.User = require("./user");