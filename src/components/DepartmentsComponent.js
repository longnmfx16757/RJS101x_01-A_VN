import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

function RenderDepartments({ department }) {
  return (
    <Card>
      <CardTitle className="staff-title">{department.name}</CardTitle>
      <CardText className="staff-text">
        Số lượng nhân viên: {department.numberOfStaff}
      </CardText>
    </Card>
  );
}
const Departments = (props) => {
  const department = props.department.map((department) => {
    return (
      <div className="col-lg-4 col-md-6 col-12 p-1">
        <RenderDepartments department={department} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{department}</div>
    </div>
  );
};
export default Departments;
