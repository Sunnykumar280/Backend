/**   
 * it is used to create server 
 * 
*/
const express = require("express")
//if i want to create note then i have to use noteModel in this so i have to import it in this 
const noteModel = require('./models/notes.models')
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())
/**
 * Post api for creating notes
 * 
 */
app.post('/notes', async(req, res) => {
    const { title, description } = req.body 
    const note = await noteModel.create({
         title, 
         description 
        })

        res.status(201).json({
            message: "note is created successfully",
            note
        })
    })


        /**
         * GET API for fetch the note 
         */

        app.get('/notes', async (req, res) => {
            const note = await noteModel.find()
            res.status(200).json({
                message: "notes fetched successfully",
                note

            })
        })


        /**
         * DEELTE API for delete the note
         * isko id ke through hi delete karte hain
         */
        app.delete('/notes/:id', async (req, res) => {
        const id =  req.params.id
        const note = await noteModel.findByIdAndDelete(id)

        res.status(200).json({
            message : "Note is deleted successfully",
            note
        })
        } )

        /**
         * PATCH API for update and chaange the note 
         */
        app.patch("/notes/:id", async (req, res) => {
            const id = req.params.id
            //destructuring se dercription lelo 
            const { description} = req.body
            await noteModel.findByIdAndUpdate(id, { description })

            res.status(200).json({
                message: "Note is updated successfully"
            })
        })










module.exports = app