const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mainRouter = require("./routes/main.js");
const cors = require("cors");
const session = require("express-session");
const localStrategy = require("passport-local");
const passport = require("passport");
const Log = require("./models/log.js");
const mongoStore = require("connect-mongo");
// const ejs = require("ejs");
const path = require("path");
// const flash = require("connect-flash");
const app = express();
if (process.env.NODE_ENV != "production"){
    dotenv.config();
}


// it is for deployment

const store = mongoStore.create({
    mongoUrl : process.env.URL ,
    crypto : {
        "secret" : process.env.SECRETE 
    } ,
    touchAfter : 24 * 3600 // it will update the session info after 24hr
});
store.on("error" , ()=> {
    console.log("error in mongoStore");
});
// how to use sessions
const sessionOptions = {
    store : store ,
    secret : process.env.SECRETE , 
    resave : false , 
    saveUninitialized : true , 
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000 ,
        maxAge : 7 * 24 * 60 * 60 * 1000 ,
        httpOnly : true // it is used here for security purposes
    }
}


app.use(session({secret : "mysupersecretkey" , resave : false , saveUninitialized : true}));
// it will generate a session id to all request, it remains same even if you open multiple tags with the same link
// go to express session and read about them

app.use(passport.initialize()); // it is initialised for every request
app.use(passport.session()); // we used it to know that request is a part of which session
passport.use(new localStrategy(passport.authenticate()));

passport.serializeUser(Log.serializeUser());// it stores all the user related info
passport.deserializeUser(Log.deserializeUser()); // it deletes all the user related info from the session


app.set('view engine', 'ejs');
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

// app.get("/demouser" , async(req , res)=> {
//     const fakeUser = new Log({
//         email : "ashu78021@gmail.com" , 
//         username : "fakeUser"
//     });

//     const registeredUser = await Log.register(fakeUser , "helloworld");
//     res.send(registeredUser);
// })

app.post("/signup" , async(req , res)=> {
    const {username , email , password} = req.body;
    const user = new Log({
        email : email , 
        username : username
    });
    const registeredUser = (await Log.register(user , password));
    // console.log(registeredUser._id);

    res.redirect(`http://localhost:5173/${registeredUser._id}`);
});

// login route
app.post("/login" , passport.authenticate("local" , {failureRedirect: "/login"}) , async(req , res)=> {
    res.send("Welcome to project-> 1");
})

app.use(mainRouter);

app.listen(process.env.PORT , ()=> {
    console.log("App is listening...");
});


