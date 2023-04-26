import React, { Component } from "react";
import "./style.css";
import axios from "axios";

class AddGuardList extends Component {
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
    // getting all post by requesting to backend /freeuser
    axios.get("/post/freeuser").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.freeuser,
        });
      }
    });
  }

  filterData(post, searchkey) {
    const result = post.filter((post) => post.topic.includes(searchkey));

    this.setState({ post: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;

    axios.get("/post").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchkey);
      }
    });
  };

  postguard = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      id,
      point: this.props.point,
      shift: this.props.shift,
    });
    const res = await axios.post("/post/shedule", body, config);

    alert("Successfully Assigned post!");
    window.location.reload(true);
  };

  render() {
    return (
      <div>
        <button
          className="btn"
          type="button"
          data-toggle="modal"
          data-target={"#exampleModal" + this.props.point + this.props.shift}>
          <i class="fa fa-user-plus"></i>
        </button>
        <div
          class="modal fade"
          id={"exampleModal" + this.props.point + this.props.shift}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  All Avalible Security Guards
                </h5>
              </div>
              <div class="modal-body">
                <thead>
                  <tr class="tabel">
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
                {this.state.posts.map((post, index) => (
                  <tr class="tabel" key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{post.cid}</td>
                    <td>
                      <a
                        href={`/post/${post._id}`}
                        style={{ textDecoration: "none" }}>
                        {post.name}
                      </a>
                    </td>
                    <td>{post.nic}</td>
                    <td>{post.email}</td>
                    <td>{post.address}</td>
                    <td>{post.age}</td>
                    <td>
                      <button
                        className="btn btn-info btn-margin"
                        onClick={() => this.postguard(post._id)}>
                        <i className="fas fa-user-plus"></i>&nbsp;Add
                      </button>
                    </td>
                  </tr>
                ))}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddGuardList;
