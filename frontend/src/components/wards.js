import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'

export default class Wards extends Component {
    render() {
        return (
        <div>
            <NavBar/>
            <div style={{textAlign:'center'}}>
                
                <div class="col-sm-12 sidenav">
                    <br/>
                    <h1>Wards</h1>
                    <br/>

                    <button type="button" class="btn btn-success btn-lg btn-block"  style={{width:'250px'}}><a href={`/ward_general/`} style={{color:'white',textDecoration:'none'}}>Genaral Ward</a></button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-success btn-lg btn-block" disabled><a href="#" style={{color:'green',textDecoration:'none'}}>W001</a></button>
                    <br/><br/>
                    <button type="button" class="btn btn-success btn-lg btn-block" style={{width:'250px'}}><a href={`/ward_psychiatric/`} style={{color:'white',textDecoration:'none' }}>Psychiatric Ward</a></button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-success btn-lg btn-block" disabled><a href="#" style={{color:'green',textDecoration:'none'}}>W002</a></button>
                    <br/><br/>
                    <button type="button" class="btn btn-success btn-lg btn-block"  style={{width:'250px'}}><a href={`/ward_cancer/`} style={{color:'white',textDecoration:'none'}}>Cancer Ward</a></button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-success btn-lg btn-block" disabled><a href="#" style={{color:'green',textDecoration:'none'}}>W003</a></button>
                    <br/><br/>
                    <button type="button" class="btn btn-success btn-lg btn-block"  style={{width:'250px'}}><a href={`/ward_surgeon/`} style={{color:'white',textDecoration:'none'}}>Surgical Ward</a></button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-success btn-lg btn-block" disabled><a href="#" style={{color:'green',textDecoration:'none'}}>W004</a></button>
               
                </div>
            </div>
            
         </div>  
        )
        
    }
}
