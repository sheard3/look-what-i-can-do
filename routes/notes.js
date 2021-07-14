const router = require('express').Router();

//import models
const Note = require('../models/Note')

//@GET - /api/notes - get all notes - Public
router.get('/notes', async(req, res) => {
    try {
        const notes = await Note.find({})
        res.json(notes)
    } catch (error) {
        res.json(error)
    }
}
)

//@POST - /api/notes - create a new note - Public
router.post('/notes', async(req, res) => {
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    })

    try {
        const savedNoted = await newNote.save()
        res.json(savedNoted)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;
