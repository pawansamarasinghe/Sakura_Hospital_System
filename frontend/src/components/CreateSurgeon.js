import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'

export default class CreateSurgeon extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            age:"",
            address:"",
            phone:"",
            email:"",
            highestrank:"",
            speciality:"",
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
            specialityError:"",
            midError:"",
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
        let specialityError = "";
        let midError = "";

        if (!this.state.name){
            nameError = "Name cannot be blank";
        }

        if (!this.state.email.includes('@')){
            emailError = 'Invalid Email';
        }

        if (!this.state.speciality){
            specialityError = "Speciality cannot be blank";
        } 

        if (!this.state.mid.includes('S')){
            midError = "Invalid ID";
        }

        if (emailError || nameError ||  specialityError || midError){
            this.setState({emailError, nameError,  specialityError, midError});
            return false;
        } 

        return true;
    };


    onSubmit = (e) =>{

        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
        const {name,age,address,phone,email,highestrank,speciality,experience,mid,monday,tuesday,wednesday,thursday,friday,saturday,sunday} = this.state;

        const data = {
            name:name,
            age:age,
            address:address,
            phone:phone,
            email:email,
            highestrank:highestrank,
            speciality:speciality,
            experience:experience,
            mid:mid,
            wid:"W004",
            monday:monday,
            tuesday:tuesday,
            wednesday:wednesday,
            thursday:thursday,
            friday:friday,
            saturday:saturday,
            sunday:sunday
        };
        
       

        console.log(data)

        axios.post("/surgeon/add_surgeon",data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        name:"",
                        age:"",
                        address:"",
                        phone:"",
                        email:"",
                        highestrank:"",
                        speciality:"",
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
                        specialityError:"",
                        midError:""
                     
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
               
               <h4 className="h3 mb-3 font-weight-normal">Please Provide Surgeon Details</h4>
               <form className="needs-validation" noValidate>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Name</span>
                    <input type="text" name="name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Full Name" value={this.state.name} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.nameError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.nameError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Age</span>
                    <input type="number" name="age" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Age" value={this.state.age} onChange={this.handleInputChange}/>
                    </div>

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
                    <span className="input-group-text" style={{width:'140px'}}>Highest Rank</span>
                    <input type="text" name="highestrank" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter highest Rank" value={this.state.highestrank} onChange={this.handleInputChange}/>
                    </div>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Speciality</span>
                    <input type="text" name="speciality" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Speciality" value={this.state.speciality} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.specialityError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.specialityError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Experience</span>
                    <input type="text" name="experience" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter year of Experience" value={this.state.experience} onChange={this.handleInputChange}/>
                    </div>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>SurgeonID</span>
                    <input type="text" name="mid" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Surgeon ID" value={this.state.mid} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.midError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.midError}</div> ) : null}


                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
               </form>

               <br/>

        <button className="btn btn-success"  onClick={(e) => { this.setState({
        name:"Gamage Silva",
        age:"65",
        address:"Nugegoda",
        phone:"0112342563",
        email:"gmage@gmail.com",
        highestrank:"Division Chief",
        speciality:"Ophthalmology",
        experience:"25",
        mid:"S020",
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
