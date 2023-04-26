import "./style.css";
import React, { Component } from "react";
import AddGuardList from "./AddGuardList";
import GaurdCard from "./GaurdCard";
import axios from "axios";

export default class Schedule extends Component {
  state = {
    sch: {},
  };

  componentDidMount() {
    this.getsch();
  }
  getsch() {
    axios.get("/post/getshedule").then(async (res) => {
      if (res.data.success) {
        await this.setState({
          sch: res.data.shedule,
        });
      }
    });
  }

  render() {
    return (
      <div class="container mt-5">
        <div class="row">
          <div class="col bor-top ">Todays Schedule</div>
        </div>
        <div class="row">
          <div class="col">Location</div>
          <div class="col">Morning Shift</div>
          <div class="col">Night Shift</div>
        </div>

        <div class="row">
          <div class="col">PointA</div>
          <div class="col">
            {this.state.sch ? (
              <GaurdCard guardlist={this.state.sch.am} />
            ) : (
              <></>
            )}
            <AddGuardList point="A" shift="M" />
          </div>
          <div class="col">
            <GaurdCard guardlist={this.state.sch.an} />
            <AddGuardList point="A" shift="N" />
          </div>
        </div>

        <div class="row">
          <div class="col">PointB</div>
          <div class="col">
            <GaurdCard guardlist={this.state.sch.bm} />
            <AddGuardList point="B" shift="M" />
          </div>
          <div class="col">
            <GaurdCard guardlist={this.state.sch.bn} />
            <AddGuardList point="B" shift="N" />
          </div>
        </div>
        <div class="row">
          <div class="col">PointC</div>
          <div class="col">
            <GaurdCard guardlist={this.state.sch.cm} />
            <AddGuardList point="C" shift="M" />
          </div>
          <div class="col">
            <GaurdCard guardlist={this.state.sch.cn} />
            <AddGuardList point="C" shift="N" />
          </div>
        </div>

        <a class="btn btn-primary" href="/sechome" role="button">
          Back
        </a>
      </div>
    );
  }
}
