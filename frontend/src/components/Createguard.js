import "./style.css";
import axios from "axios";
import React, { Component } from "react";

export default class Createguard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cid: "",
      name: "",
      nic: "",
      email: "",
      address: "",
      age: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleInputAge = (e) => {
    if (e.target.value > 0 || e.target.value === "") {
      this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { cid, name, nic, email, address, age } = this.state;
    const data = {
      cid: cid,
      name: name,
      nic: nic,
      email: email,
      address: address,
      age: age,
    };

    axios.post("/post/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          cid: "",
          name: "",
          nic: "",
          email: "",
          address: "",
          age: "",
        });
        alert("Successfully created new guard!");
      }
    });
  };

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Add New Security Guard</h1>
        <form className="needs-validation" onSubmit={this.onSubmit}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>Guard ID Number</lable>
            <input
              type="text"
              className="form-control"
              name="cid"
              placeholder="Enter Drivers ID Number"
              value={this.state.cid}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>Guard Name</lable>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Guard Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>NIC</lable>
            <input
              type="text"
              className="form-control"
              name="nic"
              placeholder="Enter NIC"
              value={this.state.nic}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>Email</lable>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>Address</lable>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Enter Address"
              value={this.state.address}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "5px" }}>Age</lable>
            <input
              type="number"
              className="form-control"
              name="age"
              placeholder="Enter Age"
              value={this.state.age}
              onChange={this.handleInputAge}
              required
            />
          </div>

          <button className="btn btn-success btn-block bottom" type="submit">
            <i className="far fa-check-square"></i>
            &nbsp; SAVE
          </button>
        </form>
      </div>
    );
  }
}
