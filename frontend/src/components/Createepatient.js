import React, { Component } from 'react'
import axios from 'axios';

export default class Createepatient extends Component {

    constructor(props){
        super(props);
        this.state={
            patientNICNumber:"",
            patientName:"",
            patientPhoneNumber:"",
            driverNICNumber:"",
            bloodgroup:"",
            patientpastdata:""

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
        const {patientNICNumber,patientName,patientPhoneNumber,driverNICNumber,bloodgroup,patientpastdata} = this.state;

        const data={
            patientNICNumber:patientNICNumber,
            patientName:patientName,
            patientPhoneNumber:patientPhoneNumber,
            driverNICNumber:driverNICNumber,
            bloodgroup:bloodgroup,
            patientpastdata:patientpastdata
        }
        console.log(data)

        axios.post("/patient/save",data).then((res)=>{
            if(res.data.success){
                alert("Emergency Patient Added Successfully!")
                this.setState(
                    {
                        patientNICNumber:"",
                        patientName:"",
                        patientPhoneNumber:"",
                        driverNICNumber:"",
                        bloodgroup:"",
                        patientpastdata:""
                    }
                )
            }
        })
    }
    render() {
        return (
            <div classsName="container">
                <br/>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="/epatientHome" style={{fontSize:34,}}><b> Emergency Patient </b></a>
            </div>
            </nav>  
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Add New Patient</h1>  
            <form onSubmit={this.onSubmit}>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Patient NIC Number</lable>
                    <input type="text"
                    className="form-control"
                    name="patientNICNumber" required
                    placeholder="Enter Patient NIC Number"
                    value={this.state.patientNICNumber}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Patient Name</lable>
                    <input type="text"
                    className="form-control"
                    name="patientName" required
                    placeholder="Enter Patient Name"
                    pattern="[a-z A-Z.]+"
                    value={this.state.patientName}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Patient PhoneNumber</lable>
                    <input type="text"
                    className="form-control"
                    name="patientPhoneNumber" required
                    placeholder="Enter Patient PhoneNumber "
                    pattern="[0-9]{10}"
                    value={this.state.patientPhoneNumber}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Driver NIC Number</lable>
                    <input type="text"
                    className="form-control"
                    name="driverNICNumber" required
                    placeholder="Enter Driver NIC Number"
                    value={this.state.driverNICNumber}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Blood Group</lable>
                    <input type="text"
                    className="form-control"
                    name="bloodgroup" required
                    placeholder="Enter Patient Blood Group"
                    value={this.state.bloodgroup}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Patient History</lable>
                    <input type="text"
                    className="form-control"
                    name="patientpastdata" required
                    placeholder="Enter Patient History"
                    pattern="[a-z A-Z.]+"
                    value={this.state.patientpastdata}
                    onChange={this.handleInputChange} />
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}}>
                    <i className="far fa-check-square"></i>
                    &nbsp; SAVE
                </button>
                </form>  
               
                <button className="btn btn-danger " onClick={(e) => {
                      this.setState(
                        {
                            patientNICNumber:'975654524V',
                            patientName:'Visal',
                            patientPhoneNumber:"0778998767",
                            driverNICNumber:"9544345565",
                            bloodgroup:'A+',
                            patientpastdata:'diabetic'
                        }
                    )
                }} >  Demo</button>
            </div>
            </div>
        )
    }
}
