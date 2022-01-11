import React, { Component } from "react";
import { fetchLoginApi } from "./modules/action";
import { connect } from "react-redux";
import Loading from "../../../../components/Loading";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      client_id: "lgmlTrWzph522HpU69rt35RgoV7EVfMqExkrSSD4",
      client_secret:
        "1yNn2NNjyF8RuNpvmRuY8TsnXxcNzjQ1mu3NbNJwr0awMTJ7FyxJP1foasJU278l5aSQOI2no6Wfgd8KlS4Yg2kl3dC9hxPhHQ0KbFrbi7N7kkjm7Ln1dxpPf3habfwJ",
      grant_type: "password",
    };
  }
  componentDidMount() {
    document.title = "Đăng nhập";
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.fetchLogin(this.state, this.props.history);
  };
  renderNoti = () => {
    const { err } = this.props;
    if (err)
      return (
        <div className="alert alert-danger p-2">
          Sai tên đăng nhập hoặc mật khẩu
        </div>
      );
  };
  renderLoding = () => {
    const { loading } = this.props;
    if (loading) return <Loading />;
    return (
      <button
        type="submit"
        id="lodingbutton"
        className="btn btn-primary btn-user btn-block"
      >
        Đăng nhập
      </button>
    );
  };
  render() {
    const user = localStorage.getItem("userKH");
    if (user) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="bg-gradient-primary bg-max ">
        <div className="container ">
          {/* Outer Row */}
          <div className="row justify-content-center ">
            <div className="col-xl-10 col-lg-12 col-md-9 mt-5">
              <div className="card o-hidden border-0 shadow-lg my-5 ">
                <div className="card-body p-0">
                  {/* Nested Row within Card Body */}
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Chào mừng đã trở lại!
                          </h1>
                        </div>
                        <form
                          className="user"
                          onSubmit={this.handleLogin}
                          action="#"
                        >
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-user"
                              id="exampleInputUsername"
                              aria-describedby="usernameHelp"
                              placeholder="Enter Useranme ..."
                              name="username"
                              onChange={this.handleOnChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Password"
                              name="password"
                              onChange={this.handleOnChange}
                            />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck"
                              >
                                Nhớ tên tài khoản
                              </label>
                            </div>
                          </div>
                          {this.renderNoti()}
                          {this.renderLoding()}
                          {/* <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                          >
                            Đăng nhập
                          </button> */}
                        </form>
                        <hr />
                        <div className="text-center">
                          <Link className="small" to="/">
                            Quên mật khẩu
                          </Link>
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

const mapStateToProps = (state) => {
  return {
    loading: state.userLoginReducer.loading,
    err: state.userLoginReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (user, histoty) => {
      dispatch(fetchLoginApi(user, histoty));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
