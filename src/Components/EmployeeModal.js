import React from "react";
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class EmployeeModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.state = {
      show: false
    };
  }

  handleSave() {
    let newEmployee = {
      id: this.props.employee.id || "",
      employee_name: document.getElementById("txtName").value,
      employee_salary: document.getElementById("txtSalary").value,
      employee_age: document.getElementById("txtAge").value,
      profile_image: ""
    };
    this.props.saveUpdateEmployeeModal(newEmployee);
  }

  handleClose() {
    this.props.handleUpdateEmployeeModal();
    this.props.handleCreateEmployeeModal();
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.handleClose}
        container={this}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-lg">
            Fill Employee Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FieldGroup
              id="txtName"
              type="text"
              label="Name"
              defaultValue={this.props.employee.employee_name || ""}
              placeholder="Enter Name"
            />
            <FieldGroup
              id="txtSalary"
              type="text"
              label="Salary"
              defaultValue={this.props.employee.employee_salary || ""}
              placeholder="Enter Salary"
            />
            <FieldGroup
              id="txtAge"
              type="text"
              label="Age"
              defaultValue={this.props.employee.employee_age || ""}
              placeholder="Enter Age"
            />
            <FieldGroup
              id="filePath"
              type="file"
              label="File"
              help="Attach Employee Image."
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.handleSave}>
            Save
          </Button>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EmployeeModal;
