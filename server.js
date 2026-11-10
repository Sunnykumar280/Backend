const app = require("./src/app");
//yaha pe database ko require krna hota hain and server.js mein mongoose karke baante hain hai
const mongoose = require("mongoose");
// is this i am putting the the url of mongodb compass url


require("dotenv").config()
//this is for databse which i have to connect 
const connectToDb = require("./src/config/database")
// function connectToDb(){
//     mongoose.connect("mongodb+srv://Sunny:titOECV3JvXpnXT8@cluster0.9e38bez.mongodb.net/CRUD")
//     .then(() => {
//         console.log("Connected to DB");
//     })
// }
// all the code in this have to move into another file of different subfolder inside src folder

connectToDb();
app.listen(3000, ()=>{
    console.log("Server is running");

})