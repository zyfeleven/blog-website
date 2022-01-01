const mongoose = require("mongoose");
// all executed methods log output to console
mongoose.set("debug",true);
//define promise type
mongoose.Promise = Promise;
//connection
mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/website",{
    keepAlive:true,
});

module.exports.User = require("./user");
module.exports.Message = require("./message");