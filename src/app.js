// const express = require("express")
// const app = express()
   
// const noteModel = require("./models/notes.model")
// app.use(express.json())


// app.post("/notes", async (req, res) => {
//     const { title, description } = req.body

//     const note = await noteMdodel.create({
//     title,
//     description
//    })
// })
//  module.exports = app

 //In this i will create a Server in this file
const express = require("express");
const app = express();
const noteModel = require("./models/notes.model")
//using json to put data in req.body 
app.use(express.json())
//After when i created notes in notes.Model file then i would 

app.post("/notes", async (req, res)=>{
    //now here we are doing destructuring of data which is coming from notes.model folder which i have to in req.body 
    const {title, description } = req.body
const notes = await noteModel.create({
    title, description 
    
})
res.status(201).json({
    message: "Note created successfully", 
    notes
})

})
// but right we can't able to see req.body beacuse we have to use json 





//Another Api 
app.get("/notes", async( req, res)=>{
    const notes = await noteModel.find() 

    res.status(200).json({
        message: "Notes fetch successfully", 
        notes
    })
})
module.exports = app;