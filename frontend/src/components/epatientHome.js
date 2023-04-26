import React, { Component } from 'react'
import axios  from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable'

export default class epatientHome extends Component {
  constructor(props){
   super(props);

   this.state={
     patient:[]
   };
  }

  componentDidMount(){
    this.retrievepatient();
    
  }
   retrievepatient(){
     axios.get("/patient").then(res => {
       if(res.data.success){
       this.setState({
         patient:res.data.existingpatient
       });

       console.log(this.state.patient)
       }

     });
   }

   onDelete = (id) =>{
     axios.delete(`/patient/delete/${id}`).then((res)=>{
       alert("Deleted Successfully!!");
       this.retrievepatient();
     })
   }

   genPDF =() => {
    const doc = new jsPDF()
    doc.setFontSize(20);
    doc.text("Emergency Patient List", 50,10);
    
    var months = ["1", "2", "3", "4", "5", "6", "7",
         "8", "9", "10", "11", "12"];

         var d = new Date();
    var namedMonth = months[d.getMonth()];
    var today =  new Date().getDate() + "/ " + namedMonth + "/ " + new Date().getFullYear();
    var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    

    doc.autoTable({
      html: '#content'
    })
    
    doc.setFontSize(12);
    doc.text("SAKURA HOSPITAL - ", 10,272);
    doc.setFontSize(10);
    doc.text(" EMERGENCY PATIENT REPORT", 52,272);
    doc.save('tabel.pdf')



   }
   

  render() {
    
    return (
      <div className="container">
        <br/>
        
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
           <a className="navbar-brand" href="/epatientHome" style={{fontSize:34,}}><b> Emergency Patient </b></a>
           <a className="btn navbar-btn btn-danger navbar-right" href="/">Logout</a>
            </div>
            </nav>
            <br/> <br/> 
            <button className="btn btn-info" > <a href="/abhome" style={{textDecoration:'none', color:'white'}}>Ambulance</a> </button> <br/>

            <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute", 
            right:"150px"}}><a href="#"  onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}> Download Emegency Patients</a></button>

            

            <br/>
        <table className="table table-hover" style={{marginTop:'40px'}} id="content">
          <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Patient NIC Number</th>
        <th scope="col">Patient Name</th>
        <th scope="col">Patient PhoneNumber</th>
        <th scope="col">Driver NIC</th>
        <th scope="col">Blood Group</th>
        <th scope="col">Patient History</th>
        <th scope="col">Action</th>
        </tr>
          </thead>
          <tbody>
            {this.state.patient.map((patient,index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{patient.patientNICNumber} </td>
                <td>{patient.patientName}</td>
                <td>{patient.patientPhoneNumber}</td>
                <td>{patient.driverNICNumber}</td>
                <td>{patient.bloodgroup}</td>
                <td>{patient.patientpastdata}</td>

                <td>
                  < a className="btn btn-warning" href={`/editpt/${patient._id}`}> 
                  <i className ="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  < a className="btn btn-danger" href="#" onClick={() =>this.onDelete(patient._id)}> 
                  <i className ="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>

            ))}
          </tbody>
        </table>

        <button className="btn btn-success"> <a href="/addepatient" style={{textDecoration:'none', color:'white'}}>Add New Patient</a> </button>
        
        
      </div>
    )
  }
}

