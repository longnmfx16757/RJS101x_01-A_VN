import React from "react";
import { Card, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaff({ staff }) {
  return (
    <Card>
      <Link to={`/Staff/${staff.id}`}>
        <CardImg src={staff.image} alt={staff.name} />
        <CardTitle className="name">{staff.name}</CardTitle>
      </Link>
    </Card>
  );
}
const StaffList = (props) => {
  console.log(props);
  const staffs = props.staffs.map((staff) => {
    return (
      <div className="col-sm-6 col-md-4 col-lg-2 p-1" key={staff.id}>
        <RenderStaff staff={staff} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <h3>Nhân viên</h3>
        <hr />
      </div>
      <div className="row">{staffs}</div>
    </div>
  );
};
export default StaffList;
