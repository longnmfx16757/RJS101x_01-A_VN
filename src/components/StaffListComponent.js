import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const staffs = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-md-6 col-lg-4">
          <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{staffs}</div>
      </div>
    );
  }
}
export default StaffList;
