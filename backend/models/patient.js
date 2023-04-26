const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    
    patientNICNumber:{
        type:String,
        required:true
    },

    patientName:{
        type:String,
        required:true
    },

    patientPhoneNumber:{
        type:String,
        required:true
    },
    driverNICNumber:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    patientpastdata:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('patient',patientSchema);