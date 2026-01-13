const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    Username:{ type : String, required : true },
    Email:{ type : String, required : true, unique: true},
    createdAt: {type: Date, default: Date.now}
});

mongoose.exports = mongoose.model('User', userSchema);