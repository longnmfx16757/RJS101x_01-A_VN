import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedStaff: null };
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderStaffSelect(staff) {
    if (staff != null) {
      return (
        <Card>
          <CardBody>
            <CardTitle>Họ và tên:{staff.name}</CardTitle>
            <CardText>Ngày sinh:{dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
            <CardText>
              Ngày vào công ty:{dateFormat(staff.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban:{staff.department.name}</CardText>
            <CardText>Số ngày nghỉ còn lại:{staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm:{staff.overTime}</CardText>
          </CardBody>
        </Card>
      );
    } else return <p>Bấm vào tên nhân viên để xem thông tin.</p>;
  }

  render() {
    const staffs = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-md-6 col-lg-4 p-1">
          <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{staffs}</div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 p-1">
            {this.renderStaffSelect(this.state.selectedStaff)}
          </div>
        </div>
      </div>
    );
  }
}
export default StaffList;
