import React from "react";
import { Jumbotron, Panel } from "react-bootstrap";

class AboutModule extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="header">
          <h3><strong>About</strong></h3>

        </Jumbotron >
        <Panel bsStyle="primary"><Panel.Body>
        <p>
          This is a demo application which is completely made in react.js which includes following features.
</p>
        <p>1. Bootstrap (react-bootstrap)</p>
        <p>2. Searching</p>
        <p>3. Sorting</p>
        <p>4. Add</p>
        <p>5. Update</p>
        <p>6. Delete</p>
        <p>7. Confirmation dialogs (Bootstrap)</p>
        <p>8. Modal dialogs (Bootstrap)</p>
        </Panel.Body></Panel>
      </div>
    );
  }
}

export default AboutModule;
