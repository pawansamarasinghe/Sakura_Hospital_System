const mongoose = require('mongoose');


const nurseSchema = new mongoose.Schema({

    name : {
        type : String,
        required: true
    },

    address : {
        type :  String,
        required: true
    },

    phone : {
        type :  String,
        required: true,
        minlength: 10,
    },

    email : {
        type :  String,
        required: true,
        unique: true,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid Email "
            ]
    },

 
    level: {
        type :  String,
        required: true
    },

    experience : {
        type :  String,
        required: true
    },

    mid: {
        type: String,
        required: true,
        unique: true
    },

    wid: {
        type: String,
        required: true
    },
    
    monday: {
        type :  String
    },

    tuesday : {
        type :  String
    },

    wednesday : {
        type :  String
    },

    thursday : {
        type :  String
    },

    friday : {
        type :  String
    },

    saturday : {
        type :  String
       
    },

    sunday : {
        type :  String
        
    },

});



    module.exports = mongoose.model("NursesDetails",nurseSchema);