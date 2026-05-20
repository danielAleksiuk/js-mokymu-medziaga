const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessongSchema = new Schema({
    name: {type: String},
    description: {type: String},
    minNumberOfStudent: {type: Number}
}, {timestamps: true }); // collection

const Lesson = mongoose.model('Lesson', lessongSchema);

module.exports = Lesson;