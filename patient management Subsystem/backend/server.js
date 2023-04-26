import http from 'http';
import { Server } from 'socket.io';
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from "path";
import doctorRouter from "./routers/doctorRouter.js";
import appUserRouter from "./routers/appUserRouter.js";
import appointmentRouter from "./routers/appointmentRouter.js";
import uploadRouter from "./routers/uploadRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect(
  //process.env.MONGODB_URL ||"mongodb+srv://nadun:24899nadun.LK@cluster0.9xhzn.mongodb.net/project?w=majority&retryWrites=true",
  process.env.MONGODB_URL ||"mongodb+srv://MSAUser:pwd123@cluster0.qeep5.mongodb.net/medicalstaff_db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

app.use("/api/uploads", uploadRouter);
app.use("/api/appointmentusers", appUserRouter);
app.use("/api/doctors", doctorRouter);
app.use("/api/appointments", appointmentRouter);
app.get('api/config/paypal', (req, res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

const httpServer = http.Server(app);
 const io = new Server(httpServer, { cors: { origin: '*' } });
 const appointmentusers = [];

 io.on('connection', (socket) => {
   console.log('connection', socket.id);
   socket.on('disconnect', () => {
     const user = appointmentusers.find((x) => x.socketId === socket.id);
     if (user) {
       user.online = false;
       console.log('Offline', user.name);
       const admin = appointmentusers.find((x) => x.isAdmin && x.online);
       if (admin) {
         io.to(admin.socketId).emit('updateUser', user);
       }
     }
   });
   socket.on('onLogin', (user) => {
     const updatedUser = {
       ...user,
       online: true,
       socketId: socket.id,
       messages: [],
     };
     const existUser = appointmentusers.find((x) => x._id === updatedUser._id);
     if (existUser) {
       existUser.socketId = socket.id;
       existUser.online = true;
     } else {
       appointmentusers.push(updatedUser);
     }
     console.log('Online', user.name);
     const admin = appointmentusers.find((x) => x.isAdmin && x.online);
     if (admin) {
       io.to(admin.socketId).emit('updateUser', updatedUser);
     }
     if (updatedUser.isAdmin) {
       io.to(updatedUser.socketId).emit('listUsers', appointmentusers);
     }
   });

   socket.on('onUserSelected', (user) => {
     const admin = appointmentusers.find((x) => x.isAdmin && x.online);
     if (admin) {
       const existUser = appointmentusers.find((x) => x._id === user._id);
       io.to(admin.socketId).emit('selectUser', existUser);
     }
   });

   socket.on('onMessage', (message) => {
     if (message.isAdmin) {
       const user = appointmentusers.find((x) => x._id === message._id && x.online);
       if (user) {
         io.to(user.socketId).emit('message', message);
         user.messages.push(message);
       }
     } else {
       const admin = appointmentusers.find((x) => x.isAdmin && x.online);
       if (admin) {
         io.to(admin.socketId).emit('message', message);
         const user = appointmentusers.find((x) => x._id === message._id && x.online);
         user.messages.push(message);
       } else {
         io.to(socket.id).emit('message', {
           name: 'Admin',
           body: 'Sorry. I am not online right now',
         });
       }
     }
   });
 });

 httpServer.listen(port, () => {
  console.log(`Server is online at http://localhost:${port}`);
});

