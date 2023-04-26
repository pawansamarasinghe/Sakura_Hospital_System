const mongoose = require('mongoose');

const appoinSchema = new mongoose.Schema({


    name : {
        type :  String,
        required: true
    },

    specialty: {
        type :  String,
        required: true
    },

    image : {
        type: String
       
    },

    price: {
        type: Number
        
    },

    bookingAvailable: {
        type : Number
    },

    description: {
        type: String
    }
});

module.exports = mongoose.model("appointmentdoctors",appoinSchema);

