const mongoose = require("mongoose");
const {Schema} = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const logSchema = new Schema({
    email : {
        type : String ,
        required : true
    }
});
logSchema.plugin(passportLocalMongoose);
const Log = mongoose.model("Log" , logSchema);

module.exports = Log;