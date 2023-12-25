const mongoose = require("mongoose");
const {Schema} = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new mongoose.Schema({
    user :{
        name : {
            type : String ,
            required : true
        } ,
        email : {
            type : String ,
            required : true ,
            unique : true 
        } ,
        msg :[
           {
            type : Schema.Types.ObjectId,
            ref : "Main"
           }
        ]
    }
});

userSchema.plugin(passportLocalMongoose);


const User = mongoose.model("User" , userSchema);

// const addData = async()=> {
//     const data = await Main.insertMany([{text : "helloworld"} , {text: "ke haal hai"}]);
//     console.log(data);
//     // await data.save();
// }
// addData();
// const addUser = async () => {
//     try {
//         const data1 = await Main.findById("6584243ef3deb9ffa26c4dac");

//         if (!data1) {
//             console.log("Main document not found with ID: 6584243ef3deb9ffa26c4dac");
//             return;
//         }

//         const data = new User({
//             user: {
//                 name: "Ashish",
//                 email: "adfa@gmail.com",
//                 text: [data1]
//             }
//         });

//         const result = await data.save();
//         console.log(result);
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// addUser();

module.exports = User;