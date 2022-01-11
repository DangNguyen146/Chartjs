import React, { Component } from "react";
import NavBar from "../../../components/NavBar";
import Sidebar from "../../../components/Sidebar";
import Items from "./Items";
import { saveAs } from "file-saver";

class Charts extends Component {
  saveCanvas() {
    //save to png
    const canvasSave = document.getElementById("dowloadPNG");
    canvasSave.toBlob(function (blob) {
      saveAs(blob, "charts.png");
    });
  }
  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
          <Sidebar key={2} text={"Chart"} />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <NavBar />
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800 fw-bold">Chart</h1>
                  <div className="btn-group float-end">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Lựa chọn charts
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <button className="dropdown-item" type="button">
                          Action
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          Another action
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          Something else here
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Earnings Overview
                        </h6>
                        <div className="nav-item dropdown">
                          <a
                            className="nav-link "
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            <li>
                              <a
                                className="dropdown-item"
                                onClick={this.saveCanvas}
                              >
                                Tải xuống
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="chart-area">
                          <Items />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
