import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
     
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container-fluid">
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
            <a className="navbar-brand" href="/" style={{fontSize:34,}}><b> Medical Staff </b></a>
            </li>
            <li></li><li></li>
            <li className="nav-item">
              <Link to="/get" className="nav-link">Doctors</Link>
            </li>
            <li className="nav-item">
              <Link to="/get_surgeons" className="nav-link">Surgeons</Link>
            </li>
            <li className="nav-item">
              <Link to="/get_nurses" className="nav-link">Nurses</Link>
            </li>
            <li className="nav-item">
              <Link to="/wards" className="nav-link">Wards</Link>
            </li>
            <li style={{paddingLeft:'660px',paddingTop:'3px'}}>
            <a className="btn navbar-btn btn-danger navbar-right" href="/">Logout</a>
            </li>
          </ul>
          
            
          </div>
          
      
     
    </div>
        </div>
        </nav>
     
    )
  }
}
