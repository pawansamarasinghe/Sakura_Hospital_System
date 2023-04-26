const express = require('express');
const ambulance = require('../models/ambulance');

const router = express.Router();

//save ambulance

router.post('/ambulance/save',(req,res) =>{
    
    const newambulance =  new ambulance(req.body);

    newambulance.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Ambulance saved successfully"
        });
    });
});


//get ambulance

router.get('/ambulance',(req,res) =>{
    ambulance.find().exec((err,ambulance)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingambulance:ambulance
        });
    });
});

//get a specific ambulance

router.get("/ambulance/:id",(req,res) =>{
    const ambulanceId = req.params.id;

    ambulance.findById(ambulanceId,(err,ambulance)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            ambulance
        });

    });
})


//update ambulance

router.put('/ambulance/update/:id',(req,res)=>{
    ambulance.findByIdAndUpdate(
        req.params.id,
        {
        $set:req.body
        },
        (err,ambulance)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});



//Delete ambulance 

router.delete('/ambulance/delete/:id',(req,res)=>{
    ambulance.findByIdAndRemove(req.params.id).exec((err,deletedambulance)=>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessfully",err
        });

        return res.json({
            message:"Delete successfully",deletedambulance
        });
    });
});


module.exports = router;
