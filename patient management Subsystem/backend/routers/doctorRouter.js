import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Doctor from '../models/doctorModel.js';
import { isAdmin, isAuth } from '../utilities.js';

const doctorRouter = express.Router();

doctorRouter.get('/', expressAsyncHandler(async(req, res)=>{

  const name = req.query.name || '';
  const specialty = req.query.specialty || '';

  const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
  const specialtyFilter = specialty ? { specialty } : {};

    const doctors = await Doctor.find({
      ...nameFilter,
      ...specialtyFilter,
    });
    res.send (doctors);
}));

doctorRouter.get(
  '/specialties',
  expressAsyncHandler(async (req, res) => {
    const specialties = await Doctor.find().distinct('specialty');
    res.send(specialties);
  })
);


doctorRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    //await Doctor.remove({});
    const createdDoctors = await Doctor.insertMany(data.doctors);
    res.send({createdDoctors});
}));

doctorRouter.get('/:id', expressAsyncHandler(async(req, res)=>{
    const doctor = await Doctor.findById(req.params.id);
    if(doctor){
        res.send(doctor);
    }else{
        res.status(404).send({message: 'Doctor details not available'})
    }
}))

doctorRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const doctor = new Doctor({
        name: 'sample',
        image: '/images/img.jpg',
        price: 0,
        specialty: 'sample',
        bookingAvailable: 0,
        description: 'sample',
      });
      const createdDoctor = await doctor.save();
      res.send({ message: 'Doctor Added', doctor: createdDoctor });
    })
  );

  doctorRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const doctorId = req.params.id;
      const doctor = await Doctor.findById(doctorId);
      if (doctor) {
        doctor.name = req.body.name;
        doctor.price = req.body.price;
        doctor.image = req.body.image;
        doctor.specialty = req.body.specialty;
        doctor.bookingAvailable = req.body.bookingAvailable;
        doctor.description = req.body.description;
        const updatedDoctor = await doctor.save();
        res.send({ message: 'Doctor Details Updated', doctor: updatedDoctor });
      } else {
        res.status(404).send({ message: 'Doctor Details Not Found' });
      }
    })
  );

  doctorRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {

      const doctor = await Doctor.findById(req.params.id);
      if (doctor) {
        const deleteDoctor = await doctor.remove();
        res.send({ message: 'Doctor Record Deleted', doctor: deleteDoctor });
      } else {
        res.status(404).send({ message: 'Doctor Record Not Found' });
      }
    })
  );

export default doctorRouter;