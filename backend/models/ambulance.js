const mongoose = require('mongoose');

const ambulanceSchema = new mongoose.Schema({
    
    DriverNICNumber:{
        type:String,
        required:true
    },

    DriverName:{
        type:String,
        required:true
    },

    DriverPhoneNumber:{
        type:String,
        required:true
    },

    AmbulanceNumber:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('ambulance',ambulanceSchema);