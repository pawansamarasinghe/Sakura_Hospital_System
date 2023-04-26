import axios from "axios";
import React, { Component } from "react";

export class GaurdCard extends Component {
  remove = (id) => {
    axios.delete(`/post/removeshedule/${id}`).then((res) => {
      alert("Removed Successfully!!");
      window.location.reload(true);
    });
  };
  render_card = (guard) => {
    if (guard && guard.post && guard.post.name) {
      return (
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {guard.post.name}
          <button
            class="btn"
            onClick={() => {
              this.remove(guard.post._id);
            }}>
            <i class="fa fa-trash"></i>
          </button>
        </li>
      );
    } else {
      return <></>;
    }
  };
  map_guards = () => {
    if (this.props.guardlist) {
      return this.props.guardlist.map((guard, index) => {
        return (
          <ul key={index} class="list-group">
            {this.render_card(guard)}
          </ul>
        );
      });
    } else {
      return <></>;
    }
  };
  render() {
    return <div>{this.map_guards()}</div>;
  }
}

export default GaurdCard;
