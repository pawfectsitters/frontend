const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    avatar: {type: String, required: false},
    city: {type: String, required: false},
    date: {type: Date, default: Date.now},
    metaInformation: {type: Array, required:false}
});


module.exports = User = mongoose.model('users', UserSchema); 