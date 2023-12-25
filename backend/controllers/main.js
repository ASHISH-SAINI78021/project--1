const User = require("../models/user.js");
const Main = require("../models/main.js");

// index route
module.exports.index = async(req , res)=> {
    const data = await User.find();
    res.status(201).json(data);
}

// handling post request
module.exports.text = async (req, res) => {
   const id = req.params.id;
   const message = req.body.text;
   const user = await User.findById(id);
   const newMessage = new Main({
    text : message
   });
   user.user.msg.push(newMessage.id);
   const a = await newMessage.save();
//    console.log(a);
   await user.save();
};

// get route for main page
module.exports.main = async(req , res)=> {
    const user = await User.findById(req.params.id).populate("user.msg");
    // console.log(user.user.msg);
    res.status(201).json(user.user.msg);
}

module.exports.delete = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId).populate('user.msg');
      const msgIds = user.user.msg.map((msg) => msg._id);
  
      for (const msgId of msgIds) {
        await User.findByIdAndUpdate(userId, { $pull: { 'user.msg': msgId } });
        await Main.findByIdAndDelete(msgId);
        user.user.msg.pop();
        console.log(user.user.msg);
      }
  
      res.status(200).json({ message: 'Messages deleted successfully' });
    } catch (error) {
      console.error('Error deleting messages:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };