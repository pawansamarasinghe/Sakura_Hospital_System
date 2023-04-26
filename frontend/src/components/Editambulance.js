import axios from 'axios';
import React, { Component } from 'react'

export default class Editambulance extends Component {

    constructor(props){
        super(props);
        this.state={
            DriverNICNumber:"",
            DriverName:"",
            DriverPhoneNumber:"",
            AmbulanceNumber:""

        }
    }

    handleInputChange= (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        
        e.preventDefault() ;
        const id = this.props.match.params.id;
        const {DriverNICNumber,DriverName,DriverPhoneNumber,AmbulanceNumber} = this.state;

        const data={
            DriverNICNumber:DriverNICNumber,
            DriverName:DriverName,
            DriverPhoneNumber:DriverPhoneNumber,
            AmbulanceNumber:AmbulanceNumber
        }
        console.log(data)

        axios.put(`/ambulance/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Ambulance updated successfully")
                this.setState(
                    {  
                        DriverNICNumber:"",
                    DriverName:"",
                    DriverPhoneNumber:"",
                    AmbulanceNumber:""

                    }
                )
            }
        })
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/ambulance/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    DriverNICNumber:res.data.ambulance.DriverNICNumber,
                    DriverName:res.data.ambulance.DriverName,
                    DriverPhoneNumber:res.data.ambulance.DriverPhoneNumber,
                    AmbulanceNumber:res.data.ambulance.AmbulanceNumber
                });

                console.log(this.state.post);
            }
        });
    }
    render() {
        return (
           
            <div classsName="container">
                <br/>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
           <a className="navbar-brand" href="/abhome" style={{fontSize:34,}}><b> Ambulance </b></a>
           <a className="btn navbar-btn btn-danger navbar-right" href="/">Logout</a>
            </div>
            </nav>  
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Update Ambulance</h1>  
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Driver NIC Number</lable>
                    <input type="text"
                    className="form-control"
                    name="DriverNICNumber"
                    placeholder="Enter Driver NIC Number"
                    value={this.state.DriverNICNumber}
                    onChange={this.handleInputChange} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Driver Name</lable>
                    <input type="text"
                    className="form-control"
                    name="DriverName"
                    placeholder="Enter Driver Name"
                    value={this.state.DriverName}
                    onChange={this.handleInputChange} required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Driver PhoneNumber</lable>
                    <input type="text"
                    className="form-control"
                    name="DriverPhoneNumber"
                    placeholder="Enter Driver PhoneNumber"
                    value={this.state.DriverPhoneNumber}
                    onChange={this.handleInputChange} required/>
                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Ambulance Number</lable>
                    <input type="text"
                    className="form-control"
                    name="AmbulanceNumber"
                    placeholder="Enter Ambulance Number"
                    value={this.state.AmbulanceNumber}
                    onChange={this.handleInputChange} required/>
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; UPDATE
                </button>

                </form>
                </div>
                </div>
                
        )
    
    }
}
