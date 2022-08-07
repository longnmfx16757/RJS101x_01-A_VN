import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardImg,
  Input,
  Button,
  Form,
  FormGroup,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
  FormFeedback,
} from "reactstrap";
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

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      isModalOpen: false,
      isErrors: false,
      name: "",
      doB: "",
      salaryScale: 1,
      startDate: "",
      department: "",
      annualLeave: 0,
      overTime: 0,
      salary: "",
      image: "/assets/images/alberto.png",
      touched: {
        name: false,
        doB: false,
        startDate: false,
      },
    };
    this.search = this.search.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const staffs = JSON.parse(localStorage.getItem("staffs"));
    const newStaff = {
      id: staffs.length,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: this.state.department,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      salary: this.state.salary,
      image: this.state.image,
    };
    staffs.push(newStaff);
    localStorage.setItem("staffs", JSON.stringify(staffs));
    this.toggleModal();
    event.preventDefault();
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(name, doB, startDate) {
    const errors = {
      name: "",
      doB: "",
      startDate: "",
    };
    if (!this.state.touched.name) errors.name = "Yêu cầu nhập";
    else if (this.state.touched.name && name.length < 3)
      errors.name = "Yêu cầu nhiều hơn 2 ký tự";
    else if (this.state.touched.name && name.length >= 30)
      errors.name = "Yêu cầu ít hơn 30 ký tự";

    if (!this.state.touched.doB) errors.doB = "Yêu cầu nhập";

    if (!this.state.touched.startDate) errors.startDate = "Yêu cầu nhập";

    return errors;
  }

  search(event) {
    const staffs = JSON.parse(localStorage.getItem("staffs"));
    let x;
    if (this.search.value == "") {
      x = staffs;
    } else {
      x = staffs.filter((staff) =>
        staff.name.toLowerCase().includes(this.search.value.toLowerCase())
      );
    }
    if (!this.state.isSearch) this.setState({ isSearch: true });
    localStorage.setItem("searchStaff", JSON.stringify(x));
    event.preventDefault();
  }

  render() {
    if (!localStorage.getItem("staffs")) {
      localStorage.setItem("staffs", JSON.stringify(this.props.staffs));
    }
    if (!localStorage.getItem("searchStaff")) {
      localStorage.setItem("searchStaff", "[]");
    }
    const staffs = JSON.parse(localStorage.getItem("staffs"));
    const search = JSON.parse(localStorage.getItem("searchStaff"));
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate
    );
    const staff = staffs.map((staff) => {
      return (
        <div className="col-sm-6 col-md-4 col-lg-2 p-1" key={staff.id}>
          <RenderStaff staff={staff} />
        </div>
      );
    });
    const searchStaff = search.map((staff) => {
      return (
        <div className="col-sm-6 col-md-4 col-lg-2 p-1" key={staff.id}>
          <RenderStaff staff={staff} />
        </div>
      );
    });
    const render = this.state.isSearch ? searchStaff : staff;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h3>Nhân viên</h3>
          </div>
          <div className="col-3">
            <Button outline onClick={this.toggleModal}>
              <span className="fa fa-plus-square"></span>
            </Button>
          </div>
          <Form className="col-6" onSubmit={this.search}>
            <FormGroup row>
              <Col md={10}>
                <Input
                  type="text"
                  id="search"
                  name="search"
                  innerRef={(input) => (this.search = input)}
                ></Input>
              </Col>
              <Col md={2}>
                <Button type="submit" value="submit" color="primary">
                  <span className="fa fa-search"> Tìm</span>
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    valid={errors.name == ""}
                    invalid={errors.name !== ""}
                    onBlur={this.handleBlur("name")}
                    onChange={this.handleChange}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="doB"
                    name="doB"
                    value={this.state.doB}
                    valid={errors.doB == ""}
                    invalid={errors.doB !== ""}
                    onBlur={this.handleBlur("doB")}
                    onChange={this.handleChange}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={this.state.startDate}
                    valid={errors.startDate == ""}
                    invalid={errors.startDate !== ""}
                    onBlur={this.handleBlur("startDate")}
                    onChange={this.handleChange}
                  />
                  <FormFeedback>{errors.startDate}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>
                <Col md={8}>
                  <Input
                    type="select"
                    id="department"
                    name="department"
                    onChange={this.handleChange}
                  >
                    <option
                      value={{ id: "Dept01", name: "Sale", numberOfStaff: 1 }}
                    >
                      Sale
                    </option>
                    <option
                      value={{
                        id: "Dept02",
                        name: "HR",
                        numberOfStaff: 3,
                      }}
                    >
                      HR
                    </option>
                    <option
                      value={{
                        id: "Dept03",
                        name: "Marketing",
                        numberOfStaff: 2,
                      }}
                    >
                      Marketing
                    </option>
                    <option
                      value={{
                        id: "Dept04",
                        name: "IT",
                        numberOfStaff: 1,
                      }}
                    >
                      IT
                    </option>
                    <option
                      value={{
                        id: "Dept05",
                        name: "Finance",
                        numberOfStaff: 11,
                      }}
                    >
                      Finance
                    </option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="salaryScale"
                    name="salaryScale"
                    placeholder="1.0-3.0"
                    value={this.state.salaryScale}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="annualLeave"
                    name="annualLeave"
                    placeholder="1.0"
                    value={this.state.annualLeave}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="overTime" md={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="overTime"
                    name="overTime"
                    placeholder="0"
                    value={this.state.overTime}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col md={{ offset: 3 }}>
                  <Button type="submit" value="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        <div className="row">{render}</div>
      </div>
    );
  }
}
export default StaffList;
