const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true ,  'firstname is required'],
        maxlength : [25,'Should not exceed 25']

    },
    lastName : {
        type : String,
        required : [true ,  'firstname is required'],
        maxlength : [25,'Should not exceed 25']

    },
    age : {
        type : Number
    },

    gender : {
      type : String,
      required : [true,'Enter the gender']
    },

    email : {
    
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true,'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        }
    

});

module.exports = userSchema ;