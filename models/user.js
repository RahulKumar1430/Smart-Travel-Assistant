const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pastport');

const userSchema=mongoose.Schema({
    name:String,
    timing:String,
    price_indian:String,
    price_foreigner:String,
    closed:String,
    rating:String,
    distance:Number,
    place:String,
    image1:String,
    image2:String,
    image3:String,
    tags:String,
    state:String,
    location:String,
    address:String,
    livelocation:String
});
module.exports=mongoose.model("user",userSchema);