const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const labRoutes = require('./routes/lab');

//kitty routes
//const secRoutes = require('./routes/post')

//pawan routes
const ambulanceRoutes = require('../backend/routes/ambulance');
const patientRoutes = require('../backend/routes/patient');

//buddisha routes
const postsRoutes = require('../backend/routes/posts');

//Shanali Routes
const docRoutes = require('./routes/doctors');
const Routes = require('./routes/nurses');
const Route = require('./routes/surgeons');
const uploadRouter = require('./routes/appoinmentDoc');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(labRoutes);
//kitty middleware
app.use("/post", require("./routes/post"));

//pawan middlewares
app.use(ambulanceRoutes);
app.use(patientRoutes);

//buddisha middlewares
app.use(postsRoutes);

//shanali middlewares
app.use(docRoutes);
app.use(Routes);
app.use(Route);
app.use(uploadRouter);

const PORT = 9000;
const DB_URL = 'mongodb+srv://MSAUser:pwd123@cluster0.qeep5.mongodb.net/medicalstaff_db?retryWrites=true&w=majority'

//'mongodb+srv://admin:admin123@cluster0.lrnpf.mongodb.net/lab?retryWrites=true&w=majority'

//kitty
//'mongodb+srv://naveen:abc23@security.aaguc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connection error',err));

app.listen(PORT, () => {
    console.log(`App is Running on ${PORT}`);
});


