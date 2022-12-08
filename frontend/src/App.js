import React, { Component } from "react";
import { Routes, Route, Link, redirect } from "react-router-dom";
import swal from 'sweetalert';
import "./styles/App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardSplitEntry from "./components/board-split-entry.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import NoFound from "./components/nofound.component";
import Logo from "./img/logo-removebg-preview.png"

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  async logOut() {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to log out?",
      icon: "warning",
      dangerMode: true,
    });
    if (willDelete) {
      redirect("/login");
      AuthService.logout();
      this.setState({
        showModeratorBoard: false,
        showAdminBoard: false,
        currentUser: undefined,
      });
      await swal("LogOut!", "You are now log out!", "success");
      window.location.reload(false);
    }
    
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link to={"/"} className="navbar-brand">
              <img src={Logo} alt='Logo-Aledia' className="aledia-logo"/>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/home"} class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>

                {showModeratorBoard && (
                  <li className="nav-item">
                    <Link to={"/mod"} className="nav-link">
                      Moderator Board
                    </Link>
                  </li>
                )}

                {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      Admin Board
                    </Link>
                  </li>
                )}

                {currentUser && (
                  <li className="nav-item">
                    <Link to={"/split-entry"} className="nav-link">
                      Split Entry
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    <div className="container-profile">
                      <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img-header"
                        className="profile-img-header"
                      />
                      <div className="profile-name-header">{currentUser.username}</div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={this.logOut}>
                    LogOut
                  </div>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/split-entry" element={<BoardSplitEntry />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;