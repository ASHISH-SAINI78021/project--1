const mongoose = require("mongoose");

const mainSchema = new mongoose.Schema({
    text : String
});

const Main = mongoose.model("Main" , mainSchema);
module.exports = Main;