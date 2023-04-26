import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'

export default class NurseDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            nurses:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/nurse/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    nurses:res.data.nurses
                });

                console.log(this.state.nurses);
            }
        });
    }

    render() {

        const {name,address,phone,email,level,experience,mid,wid} = this.state.nurses;

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

                    <dt className="col-sm-3">Level</dt>
                    <dd className="col-sm-9">{level}</dd>

                    <dt className="col-sm-3">Year Of Experience</dt>
                    <dd className="col-sm-9">{experience}</dd>

                    <dt className="col-sm-3">NurseID</dt>
                    <dd className="col-sm-9">{mid}</dd>

                    <dt className="col-sm-3">WardID</dt>
                    <dd className="col-sm-9">{wid}</dd>
                    
                </d1>
                
            </div>
           
        )
    }
}



