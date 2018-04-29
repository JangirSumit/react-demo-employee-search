import React from "react";
import { Modal, Button } from "react-bootstrap";

class ConfirmationModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleHide = this.handleHide.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }

  handleHide() {
    this.props.handleHide();
  }

  handleOk() {
    this.props.handleOk();
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.handleHide}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title">
            Confirmation Alert
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide}>Close</Button>
          <Button bsStyle="primary" onClick={this.handleOk}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ConfirmationModal;
