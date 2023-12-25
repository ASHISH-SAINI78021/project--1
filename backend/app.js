const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mainRouter = require("./routes/main.js");
const cors = require("cors");
const session = require("express-session");
const localStrategy = require("passport-local");
const app = express();
if (process.env.NODE_ENV != "production"){
    dotenv.config();
}

// how to use sessions
app.use(session({secret : "mysupersecretkey" , resave : false , saveUninitialized : true}));
// it will generate a session id to all request, it remains same even if you open multiple tags with the same link
// go to express session and read about them

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());


main()
.then(()=> {
    console.log("Connected to database");
})
.catch((err)=> {
    console.log(err);
});

async function main(){
    await mongoose.connect(process.env.URL);
}

app.use(mainRouter);

app.listen(process.env.PORT , ()=> {
    console.log("App is listening...");
});


