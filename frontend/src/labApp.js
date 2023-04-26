import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

//dulka
import CreateReport from './components/CreateReport';
import EditReport from './components/EditReport';
import labHome from './components/labHome';
//import NavBar from './components/labNavBar';
import mainhome from './components/mainhome';

//kitty
import Createguard from "./components/Createguard";
import editguard from "./components/Editguard";
import Secdetails from "./components/Secdetails";
import secHome from "./components/sechome";
import Schedule from "./components/Schedule";
import AddGuardList from "./components/AddGuardList";


//dulka

import ReportDetails from './components/ReportDetails';

//pawan
import ambulanceHome from './components/ambulanceHome'
import ambulanceNavBar from './components/ambulanceNavBar'
import Createambulance from './components/Createambulance'
import Createepatient from './components/Createepatient'
import Editambulance from './components/Editambulance'
import Editepatient from './components/Editepatient'
import epatientHome from './components/epatientHome'

//buddisha
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import EquiHome from './components/EquiHome';

import PostDetails from './components/PostDetails';

//shenali

import Home from './components/Home'
import Doctors from './components/Doctors'
import CreateDoctor from './components/CreateDoctor'
import EditDoctor from './components/EditDoctor'
import DoctorDetails from './components/DoctorDetails'
import Nurses from './components/Nurses'
import CreateNurse from './components/CreateNurse'
import EditNurse from './components/EditNurse'
import NurseDetails from './components/NurseDetails'
import Surgeons from './components/Surgeons'
import CreateSurgeon from './components/CreateSurgeon'
import EditSurgeon from './components/EditSurgeon'
import SurgeonDetails from './components/SurgeonDetails'
import NavBar from './components/NavBar'
//import Footer from './components/Footer'
import wards from './components/wards'
import surgeonWard from './components/surgeonWard'
import surgicalwardnurse from './components/surgicalwardnurse'
import editNurseSchedule from './components/editNurseSchedule'
import NurseWard from './components/NurseWard'
import SurgeonsWard from './components/SurgeonsWard'
import surgicalwarddoctors from './components/surgicalwarddoctors'
import editSurgeonSchedule from './components/editSurgeonSchedule'
import generalward from './components/generalward'

import genwarddoctors from './components/genwarddoctors'
import editGenSchedule from './components/editGenSchedule'
import genwardnurse from './components/genwardnurse'
import psychiatricward from './components/psychiatricward'
import psychwarddoctors from './components/psychwarddoctors'
import psychwardnurse from './components/psychwardnurse'
import cancerward from './components/cancerward'
import cancerwarddoctors from './components/cancerwarddoctors'
import cancerwardnurse from './components/cancerwardnurse'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="container">

        
        <Route path="/" exact component={mainhome}></Route>
        <Route path="/labhome" component={labHome}></Route>
        <Route path="/addlab" component={CreateReport}></Route>
        <Route path="/edit/:id" component={EditReport}></Route>
        <Route path="/lab/:id" component={ReportDetails}></Route>

        <Route path="/sechome" exact component={secHome}></Route>
          <Route path="/add" component={Createguard}></Route>
          <Route path="/editsec/:id" component={editguard}></Route>
          <Route path="/post/:id" component={Secdetails}></Route>
          <Route path="/schedule" component={Schedule}></Route>
          <Route path="/addguard" component={AddGuardList}></Route>


        <Route path="/abhome"  component={ambulanceHome}></Route>
        <Route path="/addambulance" component={Createambulance}></Route>  
        <Route path="/editambulance/:id" component={Editambulance}></Route>   
        <Route path="/epatientHome"  component={epatientHome}></Route>
        <Route path="/addepatient" component={Createepatient}></Route>
        <Route path="/editpt/:id" component={Editepatient}></Route>

        <Route path='/eqhome'  component={EquiHome}></Route>
          <Route path='/addeq' component={CreatePost}></Route>
          <Route path='/editeq/:id' component={EditPost}></Route>
          <Route path='/posteq/:id' component={PostDetails}></Route>


    



          <Route path="/get" exact component ={Doctors}></Route>
          <Route path="/add_doctor" component={CreateDoctor}></Route>
          <Route path="/update_doctor/:id" component={EditDoctor}></Route>
          <Route path="/doctor/:id" component={DoctorDetails}></Route>

          <Route path="/get_nurses" exact component ={Nurses}></Route>
          <Route path="/add_nurse" exact component ={CreateNurse}></Route>
          <Route path="/update_nurse/:id" component={EditNurse}></Route>
          <Route path="/nurse/:id" component={NurseDetails}></Route>

          <Route path="/get_surgeons" exact component ={Surgeons}></Route>
          <Route path="/add_surgeon" exact component ={CreateSurgeon}></Route>
          <Route path="/update_surgeon/:id" exact component ={EditSurgeon}></Route>
          <Route path="/surgeon/:id" exact component ={SurgeonDetails}></Route>

          <Route path="/wards" exact component={wards}></Route>
          
          <Route path="/ward_surgeon" eaxct component={surgeonWard}></Route>
          <Route path="/view_surgicalwardnurse" exact component={surgicalwardnurse}></Route>
          <Route path="/update_nurseSchedule/:id" exact component={editNurseSchedule}></Route>
          <Route path="/save_nurseSched/:id/:name/:wid" exact component={NurseWard}></Route>

          <Route path="/save_surgeonSched/:id/:name/:wid" exact component={SurgeonsWard}></Route>
          <Route path="/view_surgicalwardsurgeon" exact component={surgicalwarddoctors}></Route>
          <Route path="/update_surgeonSchedule/:id" exact component={editSurgeonSchedule}></Route>

          <Route path="/ward_general/" exact component={generalward}></Route>
        
          <Route path="/view_genwarddoctors" exact component={genwarddoctors}></Route>
          <Route path="/update_genSchedule/:id" exact component={editGenSchedule}></Route>
          <Route path="/view_genwardnurse" exact component={genwardnurse}></Route>
      
          <Route path="/ward_psychiatric/" exact component={psychiatricward}></Route>
          <Route path="/view_psychwarddoctors" exact component={psychwarddoctors}></Route>
          <Route path="/view_psychwardnurse" exact component={psychwardnurse}></Route>

          <Route path="/ward_cancer/" exact component={cancerward}></Route>
          <Route path="/view_canwarddoctors" eaxct component={cancerwarddoctors}></Route>
          <Route path="/view_canwardnurse" exact component={cancerwardnurse}></Route>

          </div>
        


        
      
      </BrowserRouter>
     
    )
  }
}