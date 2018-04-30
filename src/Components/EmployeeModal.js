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

  handleSave(){

  }

  handleClose() {
    this.props.handleUpdateEmployeeModal();
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
              placeholder="Enter Name"
            />
            <FieldGroup
              id="txtSalary"
              type="text"
              label="Salary"
              placeholder="Enter Salary"
            />
            <FieldGroup
              id="txtSalary"
              type="text"
              label="Age"
              placeholder="Enter Age"
            />
            <FieldGroup
              id="formControlsFile"
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
