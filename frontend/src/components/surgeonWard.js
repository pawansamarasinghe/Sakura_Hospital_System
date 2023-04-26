import React, { Component } from 'react';
import axios from 'axios';
import NurseWard from './NurseWard';
import NavBar from '../components/NavBar'

export default class surgeonWard extends Component {
constructor(props){
  super(props);

  this.state={
    surgeons:[],
    nurses:[]
  };
}


componentDidMount(){
  this.retrieveSurgeons();
  this.retrieveNurses();
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
  
  retrieveNurses(){
    axios.get("/nurses/get_surgnurses").then(res =>{
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
                <h4 style={{textAlign:'center'}}>Surgical Ward Details</h4>
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
              this.state.surgeons.map((surgeons,index) =>(
                
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{surgeons.mid}</td>
                  <td>{surgeons.name}</td>
                  {/* <td> <a className="btn btn-success" style={{marginTop:'5px'}} href={`/save_surgeonSched/${surgeons._id}/${surgeons.name}/${surgeons.wid}`}><i className="far fa-check-square"></i></a></td>  */}
                </tr>
              ))
            }
          </tbody>

        </table>
        <button type="button" class="btn btn-secondary" style={{width:'250px'}}><a href={`/view_surgicalwardsurgeon`} style={{textDecoration:'none', color:'white'}}>Doctors Schedule</a></button>
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
        <button type="button" class="btn btn-secondary" style={{width:'250px'}}><a href={`/view_surgicalwardnurse`} style={{textDecoration:'none', color:'white'}}>Nurses Schedule</a></button>
            </div>
        </div>

      </div>
    )
  }
}

