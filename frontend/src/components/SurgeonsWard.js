import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import axios from 'axios'
import NavBar from '../components/NavBar'

export default class SurgeonWard extends Component {

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
            sunday:""
        
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

        axios.post("/surgeon/add_surgeonward",data)
        .then((res) =>{
            if(res.data.success){
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
                        sunday:""
                    }
                )
            }
        },
        
       )
    }

    render() {
        const { id } = this.props.match.params;
        const { name} = this.props.match.params;
        const { wid} = this.props.match.params;
        return (
        <div>
            <NavBar/>
                
        <div className="col-md-4 mt-4 mx-auto">
        <h4 className="h3 mb-3 font-weight-normal">Save the Nurse to the ward</h4>
        <form className="needs-validation" noValidate>

        <br/>
        <h6>WardID is:  {wid}</h6>
        <h6>Nurse_Id:  {id}</h6>
        <h6>Name is:  {name}</h6>
        <br/>

        <div className="input-group mb-3" style={{marginBottom:'15px'}}>
        <span className="input-group-text" style={{width:'100px'}}>WardID</span>
        <input type="text" name="wid" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  value={this.state.wid} onChange={this.handleInputChange}/>
        </div>

        <div className="input-group mb-3" style={{marginBottom:'15px'}}>
        <span className="input-group-text" style={{width:'100px'}}>SurgeonID</span>
        <input type="text" name="mid" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  value={this.state.mid} onChange={this.handleInputChange}/>
        </div>

        <div className="input-group mb-3" style={{marginBottom:'15px'}}>
        <span className="input-group-text" style={{width:'100px'}}>Name</span>
        <input type="text" name="name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  value={this.state.name} onChange={this.handleInputChange}/>
        </div>

        
        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>

     
    </form>
    </div>
    </div>
        )
    }
}
