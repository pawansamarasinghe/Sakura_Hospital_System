const mongoose = require('mongoose');


const surgeonSchema = new mongoose.Schema({

    name : {
        type : String,
        required: true
    },

    age : {
        type: Number,
        required: true
    }, 

    address : {
        type :  String,
        required: true
    },

    phone : {
        type :  String,
        required: true,
        minlength: 10
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

    highestrank : {

        type: String,
        required: true
    },
 
    speciality: {
        type :  String,
        required: true
    },

    experience:{
        type: Number,
        required: true
    },

    mid:{
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
        
    }

});

// surgeonSchema.pre("save", async function(next){
//     if(!this.isModified("password")){
//     next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt)
//     next();
//     })

    module.exports = mongoose.model("SurgeonsDetails",surgeonSchema);