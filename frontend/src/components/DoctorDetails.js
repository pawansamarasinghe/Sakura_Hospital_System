import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'

export default class DoctorDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            doctors:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/doctor/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    doctors:res.data.doctors
                });

                console.log(this.state.doctors);
            }
        });
    }

    render() {

        const {name,address,phone,email,speciality,experience,mid,wid} = this.state.doctors;

        return (
            <div style={{marginTop:'20px'}}>
                <NavBar/>
                <h4>{name}</h4>
                <hr/>

                <d1 className="row">
                    <dt className="col-sm-3">Address</dt>
                    <dd className="col-sm-9">{address}</dd>

                    <dt className="col-sm-3">Phone</dt>
                    <dd className="col-sm-9">{phone}</dd>

                    <dt className="col-sm-3">Email</dt>
                    <dd className="col-sm-9">{email}</dd>

                    <dt className="col-sm-3">Speciality</dt>
                    <dd className="col-sm-9">{speciality}</dd>

                    <dt className="col-sm-3">YearOfExperience</dt>
                    <dd className="col-sm-9">{experience}</dd>
                   
                    <dt className="col-sm-3">DoctorID</dt>
                    <dd className="col-sm-9">{mid}</dd>

                    <dt className="col-sm-3">WardID</dt>
                    <dd className="col-sm-9">{wid}</dd>
                    
                </d1>
                
            </div>
           
        )
    }
}



