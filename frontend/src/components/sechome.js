import "./style.css";
import React, { Component } from "react";
import axios from "axios";
import jsPDF from 'jspdf'
import 'jspdf-autotable'

export default class sechome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    // getting all post by requesting to backend
    axios.get("/post").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPost,
        });
        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/post/delete/${id}`).then((res) => {
      this.retrievePosts();
      alert("Deleted Successfully!!");
    });
  };

  filterData(post, searchkey) {
    const result = post.filter((post) => post.topic.includes(searchkey));

    this.setState({ post: result });
  }

  genPDF =() => {
    const doc = new jsPDF()
    doc.setFontSize(20);
    doc.text("Security Official Summary", 50,10);
    
    var months = ["1", "2", "3", "4", "5", "6", "7",
         "8", "9", "10", "11", "12"];
  
    var d = new Date();
    var namedMonth = months[d.getMonth()];
    var today =  new Date().getDate() + "/ " + namedMonth + "/ " + new Date().getFullYear();
    var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    
  
    doc.autoTable({
      html: '#content'
    })
  
    doc.setFontSize(10);
    doc.text("Generated on "+today + " at " +time,  140,270);
  
    doc.save('sec.pdf')
  }





  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;

    axios.get("/post").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchkey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Security Guards</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="search"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>
        <table class="table" id="content">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">CID</th>
              <th scope="col">Name</th>
              <th scope="col">NIC</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Age</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{post.cid}</td>
                <td>
                  <a
                    href={`/post/${post._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {post.name}
                  </a>
                </td>
                <td>{post.nic}</td>
                <td>{post.email}</td>
                <td>{post.address}</td>
                <td>{post.age}</td>
                <td>
                  <a
                    className="btn btn-warning btn-margin"
                    href={`/editsec/${post._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger btn-margin"
                    href="#"
                    onClick={() => this.onDelete(post._id)}
                  >
                    <i className="far fa-trash-alt">&nbsp;</i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">
          <a href="/add" style={{ textDecoration: "none", color: "white" }}>
            Create new guard
          </a>
        </button>
        <button className="btn btn-success m-1">
          <a href="/schedule" style={{ textDecoration: "none", color: "white" }}>
            View Schedule
          </a>
        </button>
        <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute", right:"150px"}} onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}>Genarate</button>
      </div>
    );
  }
}
