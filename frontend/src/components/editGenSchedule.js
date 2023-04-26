import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'

export default class editGenSchedule extends Component {


    constructor(props){
        super(props);
        this.state={
            wid:"",
            mid:"",
            name:"",
            monday:"",
            tuesday:"",
            wednesday:"",
            thursday:"",
            friday:"",
            saturday:"",
            sunday:"",
            mondayError:"",
            tuesdayError:"",
            wednesdayError:"",
            thursdayError:"",
            fridayError:"",
            saturdayError:"",
            sundayError:""
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

        let mondayError = "";
        let tuesdayError = "";
        let wednesdayError = "";
        let thursdayError = "";
        let fridayError = "";
        let saturdayError = "";
        let sundayError =""

        if (!this.state.monday.includes ('12h')){
            
            if(!this.state.monday.includes ('24h')){

                if(!this.state.monday.includes ('null')){
                    mondayError = "Invalid"
                }
            }
        }
        
        
        if (!this.state.tuesday.includes ('12h')){
            
            if(!this.state.tuesday.includes ('24h')){

                if(!this.state.tuesday.includes ('null')){
                    tuesdayError = "Invalid"
                }
            }
        }

        if (!this.state.wednesday.includes ('12h')){
            
            if(!this.state.wednesday.includes ('24h')){

                if(!this.state.wednesday.includes ('null')){
                    wednesdayError = "Invalid"
                }
            }
        }

        if (!this.state.thursday.includes ('12h')){
            
            if(!this.state.thursday.includes ('24h')){

                if(!this.state.thursday.includes ('null')){
                    thursdayError = "Invalid"
                }
            }
        }

        if (!this.state.friday.includes ('12h')){
            
            if(!this.state.friday.includes ('24h')){

                if(!this.state.friday.includes ('null')){
                    fridayError = "Invalid"
                }
            }
        }

        if (!this.state.saturday.includes ('12h')){
            
            if(!this.state.saturday.includes ('24h')){

                if(!this.state.saturday.includes ('null')){
                    saturdayError = "Invalid"
                }
            }
        }

        if (!this.state.sunday.includes ('12h')){
            
            if(!this.state.sunday.includes ('24h')){

                if(!this.state.sunday.includes ('null')){
                    sundayError = "Invalid"
                }
            }
        }
       
        if (mondayError || tuesdayError|| wednesdayError || thursdayError || fridayError || saturdayError || sundayError){
            this.setState({mondayError, tuesdayError, wednesdayError, thursdayError, fridayError, saturdayError, sundayError});
            return false;
        } 

        return true;
    };

    onSubmit = (e) =>{

        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
        const id = this.props.match.params.id;

        const {wid,mid,name,monday,tuesday,wednesday,thursday,friday,saturday,sunday} = this.state;

        const data = {
            wid:wid,
            mid:mid,
            name:name,
            monday:monday,
            tuesday:tuesday,
            wednesday:wednesday,
            thursday:thursday,
            friday:friday,
            saturday:saturday,
            sunday:sunday
        }

        console.log(data)

        axios.put(`/doctor/update_docSchedule/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Doctor Schedule Updated")
                this.setState(
                    {
                        wid:"",
                        mid:"",
                        name:"",
                        monday:"",
                        tuesday:"",
                        wednesday:"",
                        thursday:"",
                        friday:"",
                        saturday:"",
                        sunday:"",
                        mondayError:"",
                        tuesdayError:"",
                        wednesdayError:"",
                        thursdayError:"",
                        fridayError:"",
                        saturdayError:"",
                        sundayError:""
                    }
                )
            }
        })
    }
    }


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/warddoctor/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    wid:res.data.doctors.wid,
                    mid:res.data.doctors.mid,
                    name:res.data.doctors.name,
                    monday:res.data.doctors.monday,
                    tuesday:res.data.doctors.tuesday,
                    wednesday:res.data.doctors.wednesday,
                    thursday:res.data.doctors.thursday,
                    friday:res.data.doctors.friday,
                    saturday:res.data.doctors.saturday,
                    sunday:res.data.doctors.sunday

                });

                console.log(this.state.doctors);
            }
        });
    }

    render() {
        return (
            <div>
                 <NavBar/>
            <div className="col-md-4 mt-3 mx-auto" style={{height:"850px"}}>

               
               <h1 className="h3 mb-3 font-weight-normal">Edit Doctor Schedule Details</h1>
               <form className="needs-validation" noValidate>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>DoctorID</span>
                    <input type="text" name="mid" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  disabled value={this.state.mid} onChange={this.handleInputChange}/>
                    </div>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Ward</span>
                    <select name="wid" id="wid" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  disabled value={this.state.wid} onChange={this.handleInputChange}>                  
                        <option value="W001" >Genaral Ward/W001</option>
                        <option value="W002" >Psychiatric Ward/W002</option>
                        <option value="W003" >Cancer Ward/W003</option>
                        <option value="W004" >Surgical Ward/W004</option>
                    </select>
                    </div>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Name</span>
                    <input type="text" name="name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  disabled value={this.state.name} onChange={this.handleInputChange}/>
                    </div>

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Monday</span>
                    <input type="text" name="monday" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter null/12h/24h" value={this.state.monday} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.mondayError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.mondayError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Tuesday</span>
                    <input type="text" name="tuesday" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter null/12h/24h" value={this.state.tuesday} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.tuesdayError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.tuesdayError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Wednesday</span>
                    <input type="email" name="wednesday" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter null/12h/24h" value={this.state.wednesday} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.wednesdayError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.wednesdayError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Thursday</span>
                    <input type="text" name="thursday" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter null/12h/24h" value={this.state.thursday} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.thursdayError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.thursdayError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Friday</span>
                    <input type="text" name="friday" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter null/12h/24h" value={this.state.friday} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.fridayError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.fridayError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Saturday</span>
                    <input type="text" name="saturday" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter null/12h/24h" value={this.state.saturday} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.saturdayError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.saturdayError}</div> ) : null}

                    <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text" style={{width:'140px'}}>Sunday</span>
                    <input type="text" name="sunday" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter null/12h/24h" value={this.state.sunday} onChange={this.handleInputChange}/>
                    </div>
                    {this.state.sundayError ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.sundayError}</div> ) : null}

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
