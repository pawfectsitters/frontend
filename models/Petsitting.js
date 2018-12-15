const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PetsittingSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    telephone: {type: Number, required: true},
    experience: [{type: String}],
    bio:{type: String},
    location: {type: String},
    fees: {type: Number},
    reviews: [{type: String}],
    pets: [{type: String}]
});

module.exports = Petsitting = mongoose.model('Petsitting', PetsittingSchema); 

