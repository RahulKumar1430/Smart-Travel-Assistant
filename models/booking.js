const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pastport');

const userSchema=mongoose.Schema({
    name:String,
    phone:String,
    timing:String,
    date:String,
    place:String,
    address:String,
    ticketId:String,
    quantity:String,
    rating:String,
    price:String,
    image:String
});
module.exports=mongoose.model("booking",userSchema);