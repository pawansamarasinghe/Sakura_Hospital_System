import React, { Component } from 'react'
import axios from 'axios'

export default class CreateDoctor extends Component {


    constructor(props){
        super(props)
        this.state={
            name:"",
            address:"",
            phone:"",
            email:"",
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
            price:"",
            image:"",
            bookingAvailable:"",
            description:"",
            nameError:"",
            addressError:"",
            phoneError:"",
            emailError:"",
            specialityError:"",
            experienceError:"",
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
        let specialityError = "";
        let midError = "";
        let widError = "";

        //pattern = "/^[0]\[0-9]{9}$/"

        if (!this.state.name){
            nameError = "Name cannot be blank";
        }

        if (!this.state.wid){
            widError = "Ward cannot be blank";
        }

        if (!this.state.email.includes('@')){
            emailError = 'Invalid Email';
        }

        if (!this.state.speciality){
            specialityError = "Speciality cannot be blank";
        } 

        if (!this.state.mid.includes('D')){
            midError = "Invalid ID";
        }

        if (emailError || nameError || widError|| specialityError || midError ){
            this.setState({emailError, nameError, widError, specialityError, midError});
            return false;
        } 

        return true;
    };

    onSubmit = (e) =>{

        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
        const {name,address,phone,email,speciality,experience,mid,wid,monday,tuesday,wednesday,thursday,friday,saturday,sunday,image,price,bookingAvailable,description} = this.state;
        
        const data = {
            name:name,
            address:address,
            phone:phone,
            email:email,
            speciality:speciality,
            experience:experience,
            mid:mid,
            wid:wid,
            monday:monday,
            tuesday:tuesday,
            wednesday:wednesday,
            thursday:thursday,
            friday:friday,
            saturday:saturday,
            sunday:sunday         
        }
        
      

        const data2={
            name:name,
            speciality:speciality,
            image:image,
            price:price,
            bookingAvailable:bookingAvailable,
            description:description

        }

        
        console.log(data)

        axios.post("/doctor/add",data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        name:"",
                        address:"",
                        phone:"",
                        email:"",
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
                        price:"",
                        image:"",
                        bookingAvailable:"",
                        description:"",
                        nameError:"",
                        addressError:"",
                        phoneError:"",
                        emailError:"",
                        specialityError:"",
                        experienceError:"",
                        midError:"",
                        widError:"",
                    }
                )
            }
        })

        axios.post('/doctor/appointment',data2);
     }
    };
  



    render() {

        return (
            <div className="col-md-8 mt-4 mx-auto" style={{height:"850px"}}>
               <h4 className="h3 mb-3 font-weight-normal">Please Provide Doctor Details</h4>
               <form className="needs-validation" noValidate>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Name</span>
                    <input type="text" name="name" className="form-control"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Full Name" value={this.state.name} onChange={this.handleInputChange}/>                        
                    </div>
                    {this.state.nameError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.nameError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Address</span>
                    <input type="text" name="address" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Address" value={this.state.address} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.addressError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.addressError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Contact Number</span>
                    <input type="text" name="phone" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Contact Number" value={this.state.phone} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.phoneError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.phoneError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Email</span>
                    <input type="email" name="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.emailError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.emailError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Speciality</span>
                    <input type="text" name="speciality" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Speciality" value={this.state.speciality} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.specialityError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.specialityError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Experience</span>
                    <input type="text" name="experience" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Year Of Experience" value={this.state.experience} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.experienceError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.experienceError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>DoctorID</span>
                    <input type="text" name="mid" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter DoctorID" value={this.state.mid} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.midError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.midError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>ChooseWard</span>
                    <select name="wid" id="wid" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  value={this.state.wid} onChange={this.handleInputChange}>                  
                        <option value="W001" >Genaral Ward/W001</option>
                        <option value="W002" >Psychiatric Ward/W002</option>
                        <option value="W003" >Cancer Ward/W003</option>
                        <option value="W004" >Surgical Ward/W004</option>
                    </select>
                    </div>
                    {this.state.widError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.widError}</div> ) : null}

                    
                   
                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                    <br/>


               </form>


               <br/>

<button className="btn btn-success"  onClick={(e) => { this.setState({
         name:"Shriyani Perera",
         address:"Galle",
         phone:"0984567384",
         email:"shriyani@gmail.com",
         speciality:"Familiy medicine",
         experience:"10",
         mid:"D020",
         wid:"W003",
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
        );
    }
}
