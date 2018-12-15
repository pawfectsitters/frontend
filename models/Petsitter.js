const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PetsitterSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    telephone: {type: Number, required: true},
    experience: [{type: String}],
    bio: {type: String, required: false},
    location: {type: String, required: false},
    fee: {type: Number, required: true},
    pettype: {type: String, required: true},
    date: {type: Date, default: Date.now},
});


module.exports = Petsitter = mongoose.model('petsitters', PetsitterSchema); 