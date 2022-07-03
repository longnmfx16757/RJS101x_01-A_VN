import React, { Component } from "react";
import { NavbarBrand, Navbar, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar dark>
          <div className="container justify-content-start">
            <NavbarBrand href="/">
              <img
                src="/assets/images/logo.png"
                height="30"
                width="41"
                alt="Ứng dụng quản lý nhân sự v1.0"
              />
            </NavbarBrand>
            <Nav Navbar className="menu">
              <NavItem>
                <NavLink className="nav-link" to="/Staff">
                  <span className="fa fa-users"></span>Nhân Viên
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/Departments">
                  <span className="fa fa-id-card-o"></span>Phòng Ban
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/Salary">
                  <span className="fa fa-credit-card-alt"></span>Bảng lương
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
