const express = require('express');
//const nurses = require('../models/nurses');
const Nurses = require("../models/nurses");
//const Ward = require("../models/ward");

const router = express.Router();

//add nurses

router.post('/nurse/add_nurse',(req,res) =>{

    let newNurse = new Nurses(req.body);

    newNurse.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Nurse Added successfully"
        });
    });
});

//get Nurses

router.get('/nurses/get_nurses',(req,res)=>{
    Nurses.find().exec((err,nurses)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingNurses:nurses
        });
    });
});

//update nurse

router.put('/nurse/update_nurse/:id',(req,res)=>{
    Nurses.findByIdAndUpdate(
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

//delete nurse

router.delete('/nurse/delete_nurse/:id',(req,res) =>{
    Nurses.findByIdAndRemove(req.params.id).exec((err,deletedNurse) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successfull",deletedNurse
        });
    });
});


//get a specific nurse

router.get("/nurse/:id",(req,res) =>{

    let nurseId = req.params.id;

    Nurses.findById(nurseId,(err,nurses) =>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            nurses
        });
    });
});


//schedules

//get Nurses by ward W004

router.get('/nurses/get_surgnurses',(req,res)=>{
    Nurses.find({wid:'W004'}).exec((err,nurses)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingNurses:nurses
        });
    });
});



router.get('/nurses/get_SurgicalnurseSchedule',(req,res)=>{
    Nurses.find({wid:'W004'}).exec((err,nurses)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingNurses:nurses
        });
    });
});

//update nurse schedule

router.put('/nurse/update_nurseSchedule/:id',(req,res)=>{
    Nurses.findByIdAndUpdate(
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

//get a specific nurse

router.get("/wardnurse/:id",(req,res) =>{

    let nurseId = req.params.id;

    Nurses.findById(nurseId,(err,nurses) =>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            nurses
        });
    });
});

//get Nurses by ward W001

router.get('/nurses/get_gennurses',(req,res)=>{
    Nurses.find({wid:'W001'}).exec((err,nurses)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingNurses:nurses
        });
    });
});

router.get('/nurses/get_GenNurseSchedule',(req,res)=>{
    Nurses.find({wid:'W001'}).exec((err,nurses)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingNurses:nurses
        });
    });
});

//get Nurses by ward W002

router.get('/nurses/get_psychnurses',(req,res)=>{
    Nurses.find({wid:'W002'}).exec((err,nurses)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingNurses:nurses
        });
    });
});

router.get('/nurses/get_PsychNurseSchedule',(req,res)=>{
    Nurses.find({wid:'W002'}).exec((err,nurses)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingNurses:nurses
        });
    });
});

//get Nurses by ward W003

router.get('/nurses/get_cnurses',(req,res)=>{
    Nurses.find({wid:'W003'}).exec((err,nurses)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingNurses:nurses
        });
    });
});

router.get('/nurses/get_CNurseSchedule',(req,res)=>{
    Nurses.find({wid:'W003'}).exec((err,nurses)=>{
        if(err){
            return res.status(400).json({

            });
        }

        return res.status(200).json({
            success:true,
            existingNurses:nurses
        });
    });
});



 module.exports = router;