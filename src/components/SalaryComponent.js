import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderSalary(staff) {
  const salary =
    staff.staff.salaryScale * 3000000 + staff.staff.overTime * 200000;
  return (
    <Card>
      <CardTitle className="staff-title">{staff.staff.name}</CardTitle>
      <CardText className="staff-text">Mã nhân viên:{staff.staff.id}</CardText>
      <CardText className="staff-text">
        Hệ số lương:{staff.staff.salaryScale}
      </CardText>
      <CardText className="staff-text">
        Số ngày làm thêm:{staff.staff.overTime}
      </CardText>
      <CardText className="staff-text">Lương:{salary}</CardText>
    </Card>
  );
}
const Salary = (props) => {
  const salary = props.staffs.map((staff) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 p-1" key={staff.id}>
        <RenderSalary staff={staff} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/Staff">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">{salary}</div>
    </div>
  );
};
export default Salary;
