/* isme humlog server start karenge and database ko connect karenge */
const app = require('./src/app');

//after installing mongoose package
const mongoose = require("mongoose")
//then afer require mongoose we will create a 
function connectToDb(){
    mongoose.connect("mongodb+srv://sssunnyyadav71_db_user:Ovvc6behuDkinGOs@cluster0.djzcack.mongodb.net/dbms2")
    //ja bhi mongoose connect hoga mongodb se toh ye chala dena
    .then(() => {
        console.log("Connected to Database")
    })

    }

//call bhi toh dena hoga n humko function chalane ke liye
connectToDb()

app.listen(3000, () => {
    console.log("server is Not runnimg 0n the port")
})