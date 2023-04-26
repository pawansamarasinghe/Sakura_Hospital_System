import React, { Component } from 'react'
import axios  from 'axios';

export default class ambulanceHome extends Component {
  constructor(props){
    super(props);
 
    this.state={
      ambulance:[]
    };
   }

   componentDidMount(){
    this.retrieveambulance();
    
  }

   retrieveambulance(){
    axios.get('/ambulance').then(res => {
      if(res.data.success){
      this.setState({
        ambulance:res.data.existingambulance
      });

      console.log(this.state.ambulance)
      }

    });
  }
 
  onDelete = (id) =>{
    axios.delete(`/ambulance/delete/${id}`).then((res)=>{
      alert("Deleted Successfully!!");
      this.retrieveambulance();
    })
  }
  render() {
    return (
      
      
      <div className="container">
        <br/>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/abhome" style={{fontSize:34,}}><b> Ambulance </b></a>
      <a className="btn navbar-btn btn-danger navbar-right" href="/">Logout</a>
    </div>
  </nav>
        <br/><br/>
        <button className="btn btn-info"> <a href="/epatientHome" style={{textDecoration:'none', color:'white'}}>Emergency Patient</a> </button><br/><br/>
        <table className = "table">
          <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Driver NIC Number</th>
            <th scope="col">Driver Name</th>
            <th scope="col">Driver PhoneNumber</th>
            <th scope="col">Ambulance Number</th>
            <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ambulance.map((ambulance,index) =>(
              <tr>
                <th scope="row">{index+1}</th>
                <td>{ambulance.DriverNICNumber}</td>
                <td>{ambulance.DriverName}</td>
                <td>{ambulance.DriverPhoneNumber}</td>
                <td>{ambulance.AmbulanceNumber}</td>
                <td>
                < a className="btn btn-warning" href={`/editambulance/${ambulance._id}`}> 
                  <i className ="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  < a className="btn btn-danger" href="#" onClick={() =>this.onDelete(ambulance._id)}> 
                  <i className ="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
                </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success"> <a href="/addambulance" style={{textDecoration:'none', color:'white'}}>Add New Ambulance</a> </button><br/>
        
      </div>
    )
  }
}
