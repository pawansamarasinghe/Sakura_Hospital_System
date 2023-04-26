import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'

export default class surgeons extends Component {
constructor(props){
  super(props);

  this.state={
    surgeons:[]
  };
}


componentDidMount(){
  this.retrieveSurgeons();
}


retrieveSurgeons(){
  axios.get("/surgeons/get_surgeons").then(res =>{
    if(res.data.success){
      this.setState({
        surgeons:res.data.existingSurgeons
      });

      console.log(this.state.surgeons)
    }


  });
}

onDelete = (id) => {

  axios.delete(`/surgeon/delete_surgeon/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveSurgeons();
  })
}

filterData(surgeons,searchKey){

  const result = surgeons.filter((surgeons) =>
  surgeons.name.toLowerCase().includes(searchKey) ||
  
  surgeons.address.toLowerCase().includes(searchKey) ||
  surgeons.phone.toLowerCase().includes(searchKey) ||
  surgeons.email.toLowerCase().includes(searchKey) ||
  surgeons.highestrank.toLowerCase().includes(searchKey) ||
  surgeons.speciality.toLowerCase().includes(searchKey) ||
  surgeons.mid.toLowerCase().includes(searchKey)
  

  )

  this.setState({surgeons:result})
}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value

  axios.get("/surgeons/get_surgeons").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingSurgeons,searchKey)

    }

  });

}

  render() {
    return (
      <div className="container" style={{ height:'800px'}}>
        <NavBar/>
        <div className="row">

            <div className="col-lg-9 mt-4 mb-2" > 
                <h4 style={{textAlign:'center'}}>All Surgeons Details</h4>
            </div>
            <div className="col-lg-3 mt-4 mb-2">
                  <input className="form-control" type="search" placeholder="Search" name="searcgQuery" onChange={this.handleSearchArea}></input>
            </div>
        </div>


        <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Highest Rank</th>
              <th scope="col">Speciality</th>
              <th scope="col">YearOf<br/>Experience</th>
              <th scope="col">SurgeonID</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.surgeons.map((surgeons,index) =>(
                
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>
                    <a href={`/surgeon/${surgeons._id}`} style={{textDecoration:'none'}}>{surgeons.name}</a>
                  </td>
                  <td>{surgeons.age}</td>
                  <td>{surgeons.address}</td>
                  <td>{surgeons.phone}</td>
                  <td>{surgeons.email}</td>
                  <td>{surgeons.highestrank}</td>
                  <td>{surgeons.speciality}</td>
                  <td>{surgeons.experience}</td>
                  <td>{surgeons.mid}</td>

                  <td>
                    <a className="btn btn-warning" href={`/update_surgeon/${surgeons._id}`}><i className="fas fa-edit"></i></a> &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(surgeons._id)}><i className="far fa-trash-alt"></i></a>
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>


        <button className="btn btn-success"><a href="/add_surgeon" style={{textDecoration:'none', color:'white'}}>Create New Surgeon</a></button>

      </div>
    )
  }
}

