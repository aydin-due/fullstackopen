const notesRouter = require('express').Router()
const Note = require('../models/note')

// get all notes
notesRouter.get('/', (req, res) => {
    Note.find({}).then(notes => { res.json(notes) })
})

// get a single note
notesRouter.get('/:id', (req, res, next) => {
  Note.findById(req.params.id).then(note => {
    if (note){
      res.json(note)
    } else {
      res.status(404).end()
    }
  })
  .catch(error => next(error))
})

// delete a note
notesRouter.delete('/:id', (req, res) => {
  Note.findByIdAndDelete(req.params.id)
  .then(() => res.status(204).end())
  .catch(error => next(error))
})

// create a note
notesRouter.post('/', (req, res, next) => {
  const body = req.body

  const note = new Note({
    content: body.content,
    important: body.important || false
  })
  
  note.save()
  .then(savedNote => {res.json(savedNote)})
  .catch(error => next(error))
})

// update note
notesRouter.put('/:id', (req, res, next) => {
  const { content, important } = req.body
  Note.findByIdAndUpdate(req.params.id, { content, important}, {new: true, runValidators: true, context: 'query'})
  .then(updatedNote => res.json(updatedNote))
  .catch(error => next(error))
})

module.exports = notesRouter