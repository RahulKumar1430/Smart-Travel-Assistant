const express= require("express");
const app=express();
const path= require('path');
const userModel=require('./models/user');
const bookingModel=require('./models/booking');
// const wishlistModel=require('./models/wishlist');
const port=3004;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    res.render("index"); 
})
app.get("/places",async (req,res)=>{
    let model= await userModel.find().limit(6);
    res.render("placesToVisit",{places:model});
});
app.post("/search", async (req,res)=>{
    let model= await userModel.find({location:req.body.search}).limit(9);
    res.render("placesToVisit",{places:model,location:req.body.search});
})
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("/booking/:place",async (req,res)=>{
    let model= await userModel.findOne({name:req.params.place})
    res.render("booking",{place:model})
    // console.log(model);
    
})
app.get("/mybooking", async(req,res)=>{
    let booking= await bookingModel.find();
    console.log(booking);
    res.render("mybooking",{booking});
})

app.post("/bookNow",async (req,res)=>{
    let {name,phone,timing,date,place,address,ticketId,quantity,nationality,image,price}=req.body;
    await bookingModel.create({
        name,
        phone,
        timing,
        date,
        place,
        address,
        ticketId,
        quantity,
        nationality,
        price,
        image
    })
    let booking= await bookingModel.find();
    res.render("mybooking",{booking});
})

app.post("/deleteBooking",async (req,res)=>{

    await bookingModel.findOneAndDelete({_id:req.body.id})
    let booking= await bookingModel.find();
    res.render("mybooking",{booking});
})

app.get("/trip",async (req,res)=>{
    res.render("trip");
});

app.post("/trip",async (req,res)=>{
    let {city}=req.body;
    let model= await userModel.find({location:city}).limit(4);
    res.render("trippost",{places:model});
})

app.get("/chatbot",(req,res)=>{
    res.render("chatbottttt"); 
})
// app.get("/khushi",(req,res)=>{
//     res.render("chatbottttt"); 
// })
app.listen(port,()=>{
    console.log(`Its running on ${port}`);    
});