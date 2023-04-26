import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'

export default class SurgeonDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            surgeons:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/surgeon/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    surgeons:res.data.surgeons
                });

                console.log(this.state.surgeons);
            }
        });
    }

    render() {

        const {name,age,address,phone,email,highestrank,speciality,experience,mid,wid} = this.state.surgeons;

        return (
            <div style={{marginTop:'20px'}}>

                <NavBar/>
                <h4>{name}</h4>
                <hr/>

                <d1 className="row">

                    <dt className="col-sm-3">Age</dt>
                    <dd className="col-sm-9">{age}</dd>

                    <dt className="col-sm-3">Address</dt>
                    <dd className="col-sm-9">{address}</dd>

                    <dt className="col-sm-3">Phone</dt>
                    <dd className="col-sm-9">{phone}</dd>

                    <dt className="col-sm-3">Email</dt>
                    <dd className="col-sm-9">{email}</dd>

                    <dt className="col-sm-3">Highest Rankl</dt>
                    <dd className="col-sm-9">{highestrank}</dd>

                    <dt className="col-sm-3">Speciality</dt>
                    <dd className="col-sm-9">{speciality}</dd>

                    <dt className="col-sm-3">Year Of Experience</dt>
                    <dd className="col-sm-9">{experience}</dd>

                    <dt className="col-sm-3">SurgeonID</dt>
                    <dd className="col-sm-9">{mid}</dd>

                    <dt className="col-sm-3">WardID</dt>
                    <dd className="col-sm-9">{wid}</dd>
                    
                </d1>
                
            </div>
           
        )
    }
}



