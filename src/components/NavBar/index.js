import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
import Datetime from "./Datetime";
import { ClickTogle } from "./modules/action";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  handleOnChange = () => {
    let temp = !this.state.status;
    this.setState({
      status: temp,
    });
    this.props.clickTogle(this.state.status);
  };
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={this.handleOnChange}
        >
          <i className="fa fa-bars" />
        </button>
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          <Datetime />
          <User />
        </ul>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {
  return {
    clickTogle: (status) => {
      dispatch(ClickTogle(status));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
