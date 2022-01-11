import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      text: "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!this.state.status == true) {
      this.setState({
        status: !this.state.status,
        text: "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
      });
    } else {
      this.setState({
        status: !this.state.status,
        text: "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled",
      });
    }
  }
  render() {
    return (
      <ul className={this.state.text} id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-text mx-3">Dashboard</div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider bg-light my-0" />
        {/* Nav Item - Dashboard */}
        <li
          className={
            this.props.text === "Dashboard" ? "active nav-item" : "nav-item"
          }
        >
          <Link className="nav-link" to="/dashboard">
            <i className="fa fa-home"></i>
            <span>Trang chủ</span>
          </Link>
        </li>
        {/* Nav Item - Charts */}
        <li
          className={
            this.props.text === "Chart" ? "nav-item active" : "nav-item"
          }
        >
          <Link className="nav-link" to="/charts">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </Link>
        </li>
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.clicktogle.status,
  };
};
export default connect(mapStateToProps)(Sidebar);
