import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'

export default class EditSurgeon extends Component {


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

        const {name,age,address,phone,email,highestrank,speciality,experience,wid} = this.state;

        const data = {
            name:name,
            age:age,
            address:address,
            phone:phone,
            email:email,
            highestrank:highestrank,
            speciality:speciality,
            experience:experience,
            wid:wid
        }

        console.log(data)

        axios.put(`/surgeon/update_surgeon/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Surgeon Details Updated")
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
                        wid:""
                    }
                )
            }
        })
    }


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/surgeon/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    name:res.data.surgeons.name,
                    age:res.data.surgeons.age,
                    address:res.data.surgeons.address,
                    phone:res.data.surgeons.phone,
                    email:res.data.surgeons.email,
                    highestrank:res.data.surgeons.highestrank,
                    speciality:res.data.surgeons.speciality,
                    experience:res.data.surgeons.experience,
                    wid:res.data.surgeons.wid

                });

                console.log(this.state.surgeons);
            }
        });
    }

    render() {
        return (
            <div>
                 <NavBar/>
            <div className="col-md-8 mt-4 mx-auto">
              
               <h1 className="h3 mb-3 font-weight-normal">Edit Surgeon Details</h1>
               <form className="needs-validation" noValidate>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Name</span>
                    <input type="text" name="name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Full Name" value={this.state.name} onChange={this.handleInputChange}/>
                    </div>

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

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Highest Rank</span>
                    <input type="text" name="highestrank" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter highest Rank" value={this.state.highestrank} onChange={this.handleInputChange}/>
                    </div>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Speciality</span>
                    <input type="text" name="speciality" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Speciality" value={this.state.speciality} onChange={this.handleInputChange}/>
                    </div>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Experience</span>
                    <input type="text" name="experience" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Speciality" value={this.state.experience} onChange={this.handleInputChange}/>
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
                    
                    {/* <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" id="inputGroup-sizing-default">Pssword</span>
                    <input type="password" name="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter Password" value={this.state.password} onChange={this.handleInputChange} disabled/>
                    </div> */}

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
