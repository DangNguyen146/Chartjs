import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import Sidebar from "../../../components/Sidebar";

class Dashboard extends Component {
  componentDidMount() {
    document.title = "Dashboard";
  }
  render() {
    const user = localStorage.getItem("userKH");
    if (user == null) {
      return <Redirect to="/" />;
    }
    return (
      <div id="page-top">
        <div id="wrapper">
          <Sidebar key={1} text={"Dashboard"} />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <NavBar />
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800 fw-bold">Dashboard</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
