const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todosSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Todos', todosSchema);