import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'

export default class Doctors extends Component {
constructor(props){
  super(props);

  this.state={
    doctors:[]
  };
}


componentDidMount(){
  this.retrieveDoctors();
}


retrieveDoctors(){
  axios.get("/doctors/get").then(res =>{
    if(res.data.success){
      this.setState({
        doctors:res.data.existingDoctors
      });

      console.log(this.state.doctors)
    }


  });
}

onDelete = (id) => {

  axios.delete(`/doctor/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveDoctors();
  })

}

filterData(doctors,searchKey){

  const result = doctors.filter((doctors) =>
    doctors.name.toLowerCase().includes(searchKey) ||
    doctors.address.toLowerCase().includes(searchKey) ||
    doctors.phone.toLowerCase().includes(searchKey) ||
    doctors.email.toLowerCase().includes(searchKey) ||
    doctors.speciality.toLowerCase().includes(searchKey)||
    doctors.experience.toLowerCase().includes(searchKey)||
    doctors.mid.toLowerCase().includes(searchKey)||
    doctors.wid.toLowerCase().includes(searchKey)
  )

  this.setState({doctors:result})
}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value

  axios.get("/doctors/get").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingDoctors,searchKey)

    }

  });

}

  render() {
    return (
      <div className="container" style={{ height:'800px'}}>
        <NavBar/>
        
        <div className="row">

            <div className="col-lg-9 mt-4 mb-2" > 
                <h4 style={{textAlign:'center'}}>All Doctors Details</h4>
            </div>
            <div className="col-lg-3 mt-4 mb-2">
                  <input className="form-control" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}></input>
            </div>
        </div>


        <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Speciality</th>
              <th scope="col">YearOf<br/>Experience</th>
              <th scope="col">WardID</th>
              <th scope="col">DoctorID</th>
              <th scope="col">Action</th>

            </tr>
          </thead>

          <tbody>
            {
              this.state.doctors.map((doctors,index) =>(
                
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>
                    <a href={`/doctor/${doctors._id}`} style={{textDecoration:'none'}}>{doctors.name}</a>
                  </td>
                  <td>{doctors.address}</td>
                  <td>{doctors.phone}</td>
                  <td>{doctors.email}</td>
                  <td>{doctors.speciality}</td>
                  <td>{doctors.experience}</td>
                  <td>{doctors.wid}</td>
                  <td>{doctors.mid}</td>
                  <td>
                    <a className="btn btn-warning" href={`/update_doctor/${doctors._id}`}><i className="fas fa-edit"></i></a> &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(doctors._id)}><i className="far fa-trash-alt"></i></a>
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>


        <button className="btn btn-success"><a href="/add_doctor" style={{textDecoration:'none', color:'white'}}>Create New Doctor</a></button>

      </div>
    )
  }
}

