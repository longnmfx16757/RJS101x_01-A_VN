import React from "react";
import dateFormat from "dateformat";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderImg({ staff }) {
  return (
    <div>
      <img className="img" src={staff.image} alt={staff.name} />
    </div>
  );
}
function RenderStaff({ staff }) {
  return (
    <div>
      <h4>Họ và tên:{staff.name}</h4>
      <p>Ngày sinh:{dateFormat(staff.doB, "dd/mm/yyyy")}</p>
      <p>Ngày vào công ty:{dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
      <p>Phòng ban:{staff.department.name}</p>
      <p>Số ngày nghỉ còn lại:{staff.annualLeave}</p>
      <p>Số ngày đã làm thêm:{staff.overTime}</p>
    </div>
  );
}
const StaffDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/Staff">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.staffs.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 col-lg-3 p-1">
          <RenderImg staff={props.staffs} />
        </div>
        <div className="col-12 col-md-5 col-lg-9 p-1">
          <RenderStaff staff={props.staffs} />
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
