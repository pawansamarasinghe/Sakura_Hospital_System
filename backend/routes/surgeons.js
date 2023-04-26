const express = require('express');
const surgeons = require('../models/surgeons');
const Surgeons = require("../models/surgeons");

const router = express.Router();

//add surgeons

router.post('/surgeon/add_surgeon',(req,res) =>{

    let newSurgeons = new Surgeons(req.body);

    newSurgeons.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Surgeon Added successfully"
        });
    });
});

//get Surgeons

router.get('/surgeons/get_surgeons',(req,res)=>{
    Surgeons.find().exec((err,surgeons)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingSurgeons:surgeons
        });
    });
});

//update surgeon

router.put('/surgeon/update_surgeon/:id',(req,res)=>{
    Surgeons.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,surgeon)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete surgeon

router.delete('/surgeon/delete_surgeon/:id',(req,res) =>{
    Surgeons.findByIdAndRemove(req.params.id).exec((err,deletedSurgeons) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successfull",deletedSurgeons
        });
    });
});


//get a specific surgeon

router.get("/surgeon/:id",(req,res) =>{

    let surgeonId = req.params.id;

    Surgeons.findById(surgeonId,(err,surgeons) =>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            surgeons
        });
    });
});


//schedules

//get Surgeons

router.get('/surgeons/get_surgeons',(req,res)=>{
    Surgeons.find().exec((err,surgeons)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingSurgeons:surgeons
        });
    });
});



router.get('/surgeons/get_SurgeonSchedule',(req,res)=>{
    Surgeons.find({wid:'W004'}).exec((err,surgeons)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingSurgeons:surgeons
        });
    });
});

//update surgeon schedule

router.put('/surgeon/update_surgeonSchedule/:id',(req,res)=>{
    Surgeons.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,nurse)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//get a specific surgeon

router.get("/wardsurgeon/:id",(req,res) =>{

    let surgeonId = req.params.id;

    Surgeons.findById(surgeonId,(err,surgeons) =>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            surgeons
        });
    });
});



module.exports = router;