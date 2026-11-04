const mongoose = require("mongoose")


function connectToDb(){
    mongoose.connect(process.env.MONGO_URL)
    //connect hone ke baad just ek msg print kar denge function call ke sath 
    .then(()=> {
        console.log("connect to db")
    })
}
module.exports = connectToDb