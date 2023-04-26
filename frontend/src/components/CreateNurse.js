import React, { Component } from 'react'
import axios from 'axios';
import NavBar from '../components/NavBar'

export default class CreateNurse extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            address:"",
            phone:"",
            email:"",
            level:"",
            experience:"",
            mid:"",
            wid:"",
            monday:"",
            tuesday:"",
            wednesday:"",
            thursday:"",
            friday:"",
            saturday:"",
            sunday:"",
            nameError:"",
            emailError:"",
            levelError:"",
            midError:"",
            widError:"",
        
       }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    validate = () => {

        let nameError = "";
        let emailError = "";
        let levelError = "";
        let midError = "";
        let widError = "";


        if (!this.state.name){
            nameError = "Name cannot be blank";
        }

        if (!this.state.wid){
            widError = "Ward cannot be blank";
        }

        if (!this.state.email.includes('@')){
            emailError = 'Invalid Email';
        }

        if (!this.state.level){
            levelError = "Level cannot be blank";
        } 

        if (!this.state.mid.includes('N')){
            midError = "Invalid ID";
        }

        if (emailError || nameError || widError|| levelError || midError){
            this.setState({emailError, nameError, widError, levelError, midError});
            return false;
        } 

        return true;
    };

    onSubmit = (e) =>{

        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
        const {name,address,phone,email,level,experience,mid,wid,monday,tuesday,wednesday,thursday,friday,saturday,sunday} = this.state;

        const data = {
            name:name,
            address:address,
            phone:phone,
            email:email,
            level:level,
            experience:experience,
            mid:mid,
            wid:wid,monday:monday,
            tuesday:tuesday,
            wednesday:wednesday,
            thursday:thursday,
            friday:friday,
            saturday:saturday,
            sunday:sunday
        }

       

        console.log(data)

        axios.post("/nurse/add_nurse",data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        name:"",
                        address:"",
                        phone:"",
                        email:"",
                        level:"",
                        experience:"",
                        mid:"",
                        wid:"",
                        monday:"",
                        tuesday:"",
                        wednesday:"",
                        thursday:"",
                        friday:"",
                        saturday:"",
                        sunday:"",
                        nameError:"",
                        emailError:"",
                        levelError:"",
                        midError:"",
                        widError:"",
                    }
                )
            }
        })

 
      }
    }

    render() {
        return (
            <div>
                 <NavBar/>
            <div className="col-md-8 mt-4 mx-auto" style={{height:"850px"}}>
                
               <h4 className="h3 mb-3 font-weight-normal">Please Provide Nurse Details</h4>
               <form className="needs-validation" noValidate>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Name</span>
                    <input type="text" name="name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Full Name" value={this.state.name} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.nameError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.nameError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Address</span>
                    <input type="text" name="address" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Address" value={this.state.address} onChange={this.handleInputChange}/>
                    </div>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Contact Number</span>
                    <input type="text" name="phone" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Contact Number" value={this.state.phone} onChange={this.handleInputChange}/>
                    </div>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Email</span>
                    <input type="email" name="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.emailError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.emailError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Level</span>
                    <input type="text" name="level" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Level" value={this.state.level} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.levelError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.levelError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Experience</span>
                    <input type="text" name="experience" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Year Of Experience" value={this.state.experience} onChange={this.handleInputChange}/>
                    </div>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Nurse ID</span>
                    <input type="text" name="mid" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Nurse ID" value={this.state.mid} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.midError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.midError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>ChooseWard</span>
                    <select name="wid" id="wid" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  value={this.state.wid} onChange={this.handleInputChange}>                  
                        <option value="W001">Genaral Ward/W001</option>
                        <option value="W002">Psychiatric Ward/W002</option>
                        <option value="W003">Cancer Ward/W003</option>
                        <option value="W004">Surgical Ward/W004</option>
                    </select>
                    </div>
                    {this.state.widError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.widError}</div> ) : null}
                    

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
               </form><br/>

                    <button className="btn btn-success"  onClick={(e) => { this.setState({
                             name:"Anoma Fonseka",
                             address:"Kandy",
                             phone:"0812345367",
                             email:"anoma@gmail.com",
                             level:"BSN",
                             experience:"12",
                             mid:"N020",
                             wid:"W002",
                             monday:"null",
                            tuesday:"null",
                            wednesday:"null",
                            thursday:"null",
                            friday:"null",
                            saturday:"null",
                            sunday:"null",

                    }

                    )}}
                    >Demo
            </button>
            
            </div>
            </div>
        );
    }
}
