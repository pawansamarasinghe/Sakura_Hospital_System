import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'

export default class EditDoctor extends Component {


    constructor(props){
        super(props);
        this.state={
            name:"",
            address:"",
            phone:"",
            email:"",
            speciality:"",
            experience:"",
            mid:"",
            wid:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();
        const id = this.props.match.params.id;

        const {name,address,phone,email,speciality,experience,mid,wid} = this.state;

        const data = {
            name:name,
            address:address,
            phone:phone,
            email:email,
            speciality:speciality,
            experience:experience,
            mid:mid,
            wid:wid
        }
      

        console.log(data)

        axios.put(`/doctor/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Doctor Details Updated")
                this.setState(
                    {
                        name:"",
                        address:"",
                        phone:"",
                        email:"",
                        speciality:"",
                        experience:"",
                        mid:"",
                        wid:""
                    }
                )
            }
        })

      
    }


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/doctor/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    name:res.data.doctors.name,
                    address:res.data.doctors.address,
                    phone:res.data.doctors.phone,
                    email:res.data.doctors.email,
                    speciality:res.data.doctors.speciality,
                    experience:res.data.doctors.experience,
                    mid:res.data.doctors.mid,
                    wid:res.data.doctors.wid

                });

                console.log(this.state.doctors);
            }
        });
    }

    render() {
        return (
            <div>
                <NavBar/>
            <div className="col-md-8 mt-4 mx-auto">
                
               <h1 className="h3 mb-3 font-weight-normal">Edit Doctor Details</h1>
               <form className="needs-validation" noValidate>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Name</span>
                    <input type="text" name="name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Full Name" value={this.state.name} onChange={this.handleInputChange}/>
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

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Speciality</span>
                    <input type="text" name="speciality" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Speciality" value={this.state.speciality} onChange={this.handleInputChange}/>
                    </div>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Experience</span>
                    <input type="text" name="experience" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Year Of Experience" value={this.state.experience} onChange={this.handleInputChange}/>
                    </div>           

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>ChooseWard</span>
                    <select name="wid" id="wid" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  value={this.state.wid} onChange={this.handleInputChange}>                  
                        <option value="W001" >Genaral Ward/W001</option>
                        <option value="W002" >Psychiatric Ward/W002</option>
                        <option value="W003" >Cancer Ward/W003</option>
                        <option value="W004" >Surgical Ward/W004</option>
                    </select>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update
                    </button>
               </form>
            </div>
            </div>
        );
    }
}
