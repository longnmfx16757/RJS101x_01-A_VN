import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

function RenderStaff({ staff }) {
  return (
    <Card>
      <
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
}
