import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import NavBar from '../components/NavBar'

export default class surgicalwarddoctors extends React.Component {
constructor(props){
  super(props);

  this.state={
    surgeons:[]
  };
}


componentDidMount(){
  this.retrieveSurgeons();
}

onDelete = (id) => {

  axios.delete(`/doctor/delete_doctorsched/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveSurgeons();
  });
}
  retrieveSurgeons(){
    axios.get("/surgeons/get_SurgeonSchedule").then(res =>{
      if(res.data.success){
        this.setState({
            surgeons:res.data.existingSurgeons
        });
  
        console.log(this.state.surgeons)
      }
  
  
    });
  }

  genPDF =() => {
    const doc = new jsPDF()
    doc.setFontSize(20);
    doc.text("Surgical ward - Doctors Schedule", 50,10);
    
    var months = ["1", "2", "3", "4", "5", "6", "7",
         "8", "9", "10", "11", "12"];

    var d = new Date();
    var namedMonth = months[d.getMonth()];
    var today =  new Date().getDate() + "/ " + namedMonth + "/ " + new Date().getFullYear();
    var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    

    doc.autoTable({
      html: '#content'
    })

    doc.setFontSize(10);
    doc.text("Generated on "+today + " at " +time,  140,270);
    doc.text("By Milanie Arnolda", 155,277);
    doc.text("(Medical Staff Manager)",150, 284);
    
    doc.setFontSize(12);
    doc.text("SAKURA HOSPITAL - ", 10,272);
    doc.setFontSize(10);
    doc.text(" SCHEDULE REPORT", 52,272);
    doc.text("Surgical Ward / W004", 30,280);
    doc.save('tabel.pdf')
  }
  

  render() {
    return (
      <div className="container" >
        <NavBar/>
        
        <div className="row">

            <div className="col-lg-12 mt-4 mb-2" > 
                <h4 style={{textAlign:'center'}}>Surgical Ward - Surgeons Schedules</h4>
            </div>
        </div>
            <div className="row">
            
            <div className="col-lg-12 mt-4 mb-2">
           <table className="table table-hover" style={{marginTop:'10px'}} id="content">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Surgeon_ID</th>
             <th scope="col">Name</th>   
             <th scope="col">Monday</th>    
             <th scope="col">Tuesday</th>    
             <th scope="col">Wednesday</th>  
             <th scope="col">Thursday</th>  
             <th scope="col">Friday</th> 
             <th scope="col">Saturday</th> 
             <th scope="col">Sunday</th> 
            </tr>
          </thead>

          <tbody>
            {
              this.state.surgeons.map((surgeons,index) =>(
                
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{surgeons.mid}</td>                  
                  <td>{surgeons.name}</td> 
                  <td>{surgeons.monday}</td>
                  <td>{surgeons.tuesday}</td>
                  <td>{surgeons.wednesday}</td>
                  <td>{surgeons.thursday}</td>
                  <td>{surgeons.friday}</td>
                  <td>{surgeons.saturday}</td>
                  <td>{surgeons.sunday}</td>
                  <td><a className="btn btn-warning"  href={`/update_surgeonSchedule/${surgeons._id}`}><i className="fas fa-edit"></i></a> &nbsp;              
                  {/* <a className="btn btn-danger"  href="#" onClick={() =>this.onDelete(surgeons._id)}><i className="far fa-trash-alt"></i></a> */}
                  </td> 
                </tr>
              ))
            }
          </tbody>

        </table>
            
              <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute", right:"150px"}} ><a href="#"  onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}>Download Schedule Report</a></button>
            </div>
        </div>

      </div>
    )
  }
}



