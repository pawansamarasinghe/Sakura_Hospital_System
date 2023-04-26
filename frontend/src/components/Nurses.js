import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'

export default class Nurses extends Component {
constructor(props){
  super(props);

  this.state={
    nurses:[]
  };
}


componentDidMount(){
  this.retrieveNurses();
}


retrieveNurses(){
  axios.get("/nurses/get_nurses").then(res =>{
    if(res.data.success){
      this.setState({
        nurses:res.data.existingNurses
      });

      console.log(this.state.nurses)
    }


  });
}

onDelete = (id) => {

  axios.delete(`/nurse/delete_nurse/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveNurses();
  });
}

filterData(nurses,searchKey){

  const result = nurses.filter((nurses) =>
    nurses.name.toLowerCase().includes(searchKey) ||
    nurses.address.toLowerCase().includes(searchKey) ||
    nurses.phone.toLowerCase().includes(searchKey) ||
    nurses.email.toLowerCase().includes(searchKey) ||
    nurses.level.toLowerCase().includes(searchKey) ||
    nurses.experience.toLowerCase().includes(searchKey)||
    nurses.wid.toLowerCase().includes(searchKey)||
    nurses.mid.toLowerCase().includes(searchKey)
    
  )

  this.setState({nurses:result})
}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value

  axios.get("/nurses/get_nurses").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingNurses,searchKey)

    }

  });

}

  render() {
    return (
      <div>
        <NavBar/>
      <div className="container" style={{ height:'800px'}}>
        
        <div className="row">

            <div className="col-lg-9 mt-4 mb-2" > 
                <h4 style={{textAlign:'center'}}>All Nurses Details</h4>
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
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Level</th>
              <th scope="col">YearOf<br/>Experience</th>
              <th scope="col">NurseID</th>
              <th scope="col">WardID</th>
              <th scope="col">Action</th>

            </tr>
          </thead>

          <tbody>
            {
              this.state.nurses.map((nurses,index) =>(
                
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>
                    <a href={`/nurse/${nurses._id}`} style={{textDecoration:'none'}}>{nurses.name}</a>
                  </td>
                  <td>{nurses.address}</td>
                  <td>{nurses.phone}</td>
                  <td>{nurses.email}</td>
                  <td>{nurses.level}</td>
                  <td>{nurses.experience}</td>
                  <td>{nurses.mid}</td>
                  <td>{nurses.wid}</td>
                  <td>
                    <a className="btn btn-warning" href={`/update_nurse/${nurses._id}`}><i className="fas fa-edit"></i></a> &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(nurses._id)}><i className="far fa-trash-alt"></i></a>
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>


        <button className="btn btn-success"><a href="/add_nurse" style={{textDecoration:'none', color:'white'}}>Create New Nurse</a></button>

      </div>
      </div>
    )
  }
}

