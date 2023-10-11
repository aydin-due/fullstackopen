const mongoose = require('mongoose')

if (process.argv.length<3) {
	console.log('give password as argument')
	process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://aydin:${password}@fso.kpdbrfn.mongodb.net/notesapp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

// schema tells mongoose how the obj are to be stored in the db
const noteSchema = new mongoose.Schema({
	content: String,
	important: Boolean,
})

// models are constructor functions (js obj)
const Note = mongoose.model('Note', noteSchema)

// create note
/*
const note = new Note({
  content: 'HTML is Easy',
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
*/

// get notes
Note.find({}).then(result => {
	result.forEach(note => {
		console.log(note)
	})
	mongoose.connection.close()
})