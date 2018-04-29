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
  render() {
    return (
      <Modal
        show="true"
        // onHide={this.handleHide}
        container={this}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
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
              help="Example block-level help text here."
            />
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.props.onSave}>
            Save
          </Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EmployeeModal;
