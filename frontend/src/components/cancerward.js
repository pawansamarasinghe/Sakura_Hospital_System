import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'

export default class cancerward extends Component {
constructor(props){
  super(props);

  this.state={
    doctors:[],
    nurses:[]
  };
}


componentDidMount(){
  this.retrieveDoctors();
  this.retrieveNurses();
}


retrieveDoctors(){
  axios.get("/doctors/get_cdoctors").then(res =>{
    if(res.data.success){
      this.setState({
        doctors:res.data.existingDoctors
      });

      console.log(this.state.doctors)
    }


  });
}
  
  retrieveNurses(){
    axios.get("/nurses/get_cnurses").then(res =>{
      if(res.data.success){
        this.setState({
          nurses:res.data.existingNurses
        });
  
        console.log(this.state.nurses)
      }
  
  
    });
  }

  render() {
    return (
      <div className="container">
        <NavBar/>
        
        <div className="row">

            <div className="col-lg-12 mt-4 mb-2" > 
                <h4 style={{textAlign:'center'}}>Cancer Ward Details</h4>
            </div>
        </div>
            <div className="row">
            <div className="col-lg-5 mt-4 mb-2" >
            <h5>Doctors</h5>
            <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.doctors.map((doctors,index) =>(
                
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{doctors.mid}</td>
                  <td>{doctors.name}</td>
                  {/* <td> <a className="btn btn-success" style={{marginTop:'5px'}} href={`/save_genSched/${doctors._id}/${doctors.name}/${doctors.wid}`}><i className="far fa-check-square"></i></a></td>  */}
                </tr>
              ))
            }
          </tbody>

        </table>
        <button type="button" class="btn btn-secondary" style={{width:'250px'}}><a href={`/view_canwarddoctors`} style={{textDecoration:'none', color:'white'}}>Doctors Schedule</a></button>
            </div>
            <div className="col-lg-2 mt-4 mb-2"></div>
            
            <div className="col-lg-5 mt-4 mb-2">
            <h5>Nurses</h5>
           <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" >ID</th>
             <th scope="col">Name</th>
            
            </tr>
          </thead>

          <tbody>
            {
              this.state.nurses.map((nurses,index) =>(
                
                <tr key={index}>
                  <th scope="row">{index+1}</th>                 
                  <td>{nurses.mid}</td>                
                  <td>{nurses.name}</td>
                  
                   {/* <td> <a className="btn btn-success" style={{marginTop:'5px'}} href={`/save_nurseSched/${nurses._id}/${nurses.name}/${nurses.wid}`}><i className="far fa-check-square"></i></a></td>  */}
                   
                </tr>
              ))
            }
          </tbody>

        </table>
        <button type="button" class="btn btn-secondary" style={{width:'250px'}}><a href={`/view_canwardnurse`} style={{textDecoration:'none', color:'white'}}>Nurses Schedule</a></button>
            </div>
        </div>

      </div>
    )
  }
}

