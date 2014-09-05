'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  type: {
    type: String,
    enum: ['Choice', 'MutilpleChoices', 'TrueFalse', 'Blanks', 'Calculate', 'Coding', 'Reviews']
  },
  description: String,
  images: [String],
  choices: [String],
  answers: [String],
  coef: Number,
  tags: [String],
  active: Boolean
});

module.exports = mongoose.model('Question', QuestionSchema);
