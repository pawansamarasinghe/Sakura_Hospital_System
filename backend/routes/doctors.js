const express = require('express');
const doctors = require('../models/doctors');
const Doctors = require("../models/doctors");

const router = express.Router();

//add doctors

router.post('/doctor/add',(req,res) =>{

    let newDoctor = new Doctors(req.body);

    newDoctor.save((err) =>{
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

//get doctors

router.get('/doctors/get',(req,res)=>{
    Doctors.find().exec((err,doctors)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingDoctors:doctors
        });
    });
});

//update doctor

router.put('/doctor/update/:id',(req,res)=>{
    Doctors.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,doctor)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete doctor

router.delete('/doctor/delete/:id',(req,res) =>{
    Doctors.findByIdAndRemove(req.params.id).exec((err,deletedDoctor) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successfull",deletedDoctor
        });
    });
});


//get a specific doctor

router.get("/doctor/:id",(req,res) =>{

    let doctorId = req.params.id;

    Doctors.findById(doctorId,(err,doctors) =>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            doctors
        });
    });
});

////scheduless


//get doctors w001

router.get('/doctors/get_generaldoctors',(req,res)=>{
    Doctors.find({wid:'W001'}).exec((err,doctors)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingDoctors:doctors
        });
    });
});



router.get('/doctors/get_genSchedule',(req,res)=>{
    Doctors.find({wid:'W001'}).exec((err,doctors)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingDoctors:doctors
        });
    });
});

router.put('/doctor/update_docSchedule/:id',(req,res)=>{
    Doctors.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,doctor)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

router.get("/warddoctor/:id",(req,res) =>{

    let doctorId = req.params.id;

    Doctors.findById(doctorId,(err,doctors) =>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            doctors
        });
    });
});

//get doctors w002

router.get('/doctors/get_psychdoctors',(req,res)=>{
    Doctors.find({wid:'W002'}).exec((err,doctors)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingDoctors:doctors
        });
    });
});


router.get('/doctors/get_psychSchedule',(req,res)=>{
    Doctors.find({wid:'W002'}).exec((err,doctors)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingDoctors:doctors
        });
    });
});

//get doctors w003

router.get('/doctors/get_cdoctors',(req,res)=>{
    Doctors.find({wid:'W003'}).exec((err,doctors)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingDoctors:doctors
        });
    });
});

router.get('/doctors/get_canSchedule',(req,res)=>{
    Doctors.find({wid:'W003'}).exec((err,doctors)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingDoctors:doctors
        });
    });
});


module.exports = router;