import React, { Component } from "react";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffDetail from "./StaffDetailComponent";
import Departments from "./DepartmentsComponent";
import Salary from "./SalaryComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }
  render() {
    const staff = JSON.parse(localStorage.getItem("staffs"));
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staffs={
            staff.filter(
              (staff) => staff.id === parseInt(match.params.id, 10)
            )[0]
          }
        />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/Staff"
            component={() => <StaffList staffs={this.state.staffs} />}
          />
          <Route path="/Staff/:id" component={StaffWithId} />
          <Route
            path="/Departments"
            component={() => (
              <Departments department={this.state.departments} />
            )}
          />
          <Route
            path="/Salary"
            component={() => <Salary staffs={this.state.staffs} />}
          />
          <Redirect to="/Staff" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
