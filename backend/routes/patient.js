const express = require('express');
const patient = require('../models/patient');

const router = express.Router();


//save patient

router.post('/patient/save',(req,res) =>{
    
    const newpatient =  new patient(req.body);

    newpatient.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"patient saved successfully"
        });
    });
});


//get patient

router.get('/patient',(req,res) =>{
    patient.find().exec((err,patient)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingpatient:patient
        });
    });
});


//get a specific patient

router.get("/patient/:id",(req,res) =>{
    const patientId = req.params.id;

    patient.findById(patientId,(err,patient)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            patient
        });

    });
})


//update patient

router.put('/patient/update/:id',(req,res)=>{
    patient.findByIdAndUpdate(
        req.params.id,
        {
        $set:req.body
        },
        (err,patient)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//Delete patient 

router.delete('/patient/delete/:id',(req,res)=>{
    patient.findByIdAndRemove(req.params.id).exec((err,deletedpatient)=>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessfully",err
        });

        return res.json({
            message:"Delete successfully",deletedpatient
        });
    });
});

module.exports = router;
