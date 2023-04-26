import React, { Component } from "react";
import axios from 'axios'
import Swal from "sweetalert2";
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

//import lab from "../../models/lab";

export default class labHome extends Component {

constructor(props){
  super(props);
this.state={
  lab:[]
};

}

componentDidMount(){
  this.retriveReports();
}

retriveReports(){
  axios.get("/lab").then(res =>{

  if(res.data.success){
    this.setState({
      lab:res.data.existingLab
    });

    console.log(this.state.lab)
  }

  });
}

onDelete = (id) => {
    axios.delete(`/lab/delete/${id}`).then((res) =>{
        //alert("Deleted Successfully !!");

        Swal.fire({
          icon: 'error',
          title: 'Deleted...',
          text: 'Record Deleted Successfully !!',
          
        })
        this.retriveReports();
    })
}

genPDF =() => {
  const doc = new jsPDF()
  doc.setFontSize(20);
  doc.text("Lab Report Summary - SAKURA Hospitals", 50,10);
  
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

  doc.save('labsummary.pdf')
}


filterData(lab,searchKey){
    const result = lab.filter((lab) =>
    lab.name.toLowerCase().includes(searchKey) ||
    lab.name.includes(searchKey) ||
    lab.nic.toLowerCase().includes(searchKey) ||
    lab.age.toLowerCase().includes(searchKey) ||
    lab.sex.toLowerCase().includes(searchKey) ||
    lab.sex.includes(searchKey) ||
    lab.type.toLowerCase().includes(searchKey) ||
    lab.type.includes(searchKey) ||
    lab.result.toLowerCase().includes(searchKey) ||
    lab.result.includes(searchKey) ||
    lab.date.toLowerCase().includes(searchKey) ||
    lab.status.toLowerCase().includes(searchKey) ||
    lab.status.includes(searchKey)
    )

    this.setState({lab:result});

}


handleSearchArea = (e) =>{
   const searchKey = e.currentTarget.value;

   axios.get("/lab").then(res =>{

    if(res.data.success){
      this.filterData(res.data.existingLab,searchKey)
    }
  
    });
}
  
  render() {
    return(

      
      <div className="container">
        
        <link type="text/css" rel="stylesheet" href="../css/labtable.css" />

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            
          <a className="navbar-brand" href="/labhome" style={{fontSize:34,}}><b> <span class="fa fa-vial" aria-hidden="false">  SAKURA Laboratory</span></b></a>
          <a className="btn navbar-btn btn-danger navbar-right" href="/">Logout</a>
          </div>
          </nav>


          <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
  
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                  <input 
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  name="searchQuery"
                  onChange={this.handleSearchArea}>

                  </input>
              </div>
          </div>

          <button className="btn btn-success"><a href="/addlab" style={{textDecoration:'none',color:'white'}}>Add New +</a></button>
          <div className="rightcon">
          Export Summary as:&nbsp;
          <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute", right:"150px"}} onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}>PDF</button>&nbsp;
          <ReactHTMLTableToExcel
            className="btn btn-info"
            table="content"
            filename="lab-sum-Excel"
            sheet="sheet"
            buttonText="Excel"
            />
            </div>
       
        <table className="table" id="content">
        <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">NIC</th>
                    <th scope="col">Age</th>
                    <th scope="col">Sex</th>
                    <th scope="col">Type</th>
                    <th scope="col">Results</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
              {this.state.lab.map((lab,index) =>(
                //<tr key={index}>
                <tr>
                  <th scope="row">{index+1}</th>
                    <td>
                        <a href={`/lab/${lab._id}`} style={{textDecoration:'none'}}>
                      {lab.name}
                      </a>
                    </td>
                  <td>{lab.nic}</td>
                  <td>{lab.age}</td>
                  <td>{lab.sex}</td>
                  <td>{lab.type}</td>
                  <td>{lab.result}</td>
                  <td>{lab.date}</td>
                  <td>{lab.status}</td>
                  <td>
                    <a className="btn btn-warning" href={`/edit/${lab._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(lab._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                    
                  </td>
                </tr>

              ))}

            </tbody>

            </table>
            

            

      </div>
      </div>
    )
  }
}