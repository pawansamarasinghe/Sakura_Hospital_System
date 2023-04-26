const express = require('express');
const AppoinmentDoc = require("../models/appoinmentDoc")

const router = express.Router();




router.post('/doctor/appointment',(req,res) =>{

    let newAppoinmentDoc = new AppoinmentDoc(req.body);

    newAppoinmentDoc.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Doctor Added successfully"
        });
    });
});

module.exports = router;