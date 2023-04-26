import React, { Component } from "react";
import axios from "axios";

export default class Secdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/post/${id}`).then((res) => {
      if (res.data.saccess) {
        this.setState({
          post: res.data.post,
        });
        console.log(this.state.post);
      }
    });
  }

  render() {
    const { cid, name, nic, email, address, age } = this.state.post;

    return (
      <div style={{ marginTop: "20px" }}>
        <h4>{name}</h4>
        <hr />
        <dl className="row">
          <dt className="col-sm-3">CID</dt>
          <dd className="col-sm-9">{cid}</dd>

          <dt className="col-sm-3">Name</dt>
          <dd className="col-sm-9">{name}</dd>

          <dt className="col-sm-3">NIC</dt>
          <dd className="col-sm-9">{nic}</dd>

          <dt className="col-sm-3">Email</dt>
          <dd className="col-sm-9">{email}</dd>

          <dt className="col-sm-3">Address</dt>
          <dd className="col-sm-9">{address}</dd>

          <dt className="col-sm-3">Age</dt>
          <dd className="col-sm-9">{age}</dd>
        </dl>
      </div>
    );
  }
}
