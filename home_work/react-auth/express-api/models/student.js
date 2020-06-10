const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nameImg: { type: String },
    linkedIn: { type: String },
    gitHub: { type: String },
    mostLikelyTo: { type: String }
});


module.exports = mongoose.model('Student', studentSchema);
