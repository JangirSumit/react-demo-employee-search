import React from "react";

class ConfirmationModel extends React.Component {
  render() {
    return (
      <div className="modal" tabIndex="-1" role="dialog" id="modelDialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p>Are you sure!</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Delete
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationModel;
