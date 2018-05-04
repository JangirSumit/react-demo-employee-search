import React from "react";
import { Jumbotron } from "react-bootstrap";

class AboutModule extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h3><strong>About</strong></h3>

        </Jumbotron >
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
      </div>
    );
  }
}

export default AboutModule;
