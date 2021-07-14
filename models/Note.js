const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Note', NoteSchema);