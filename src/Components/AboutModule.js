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
        <p>Bootstrap (react-bootstrap)</p>
        <p>Searching</p>
        <p>Sorting</p>
        <p>Add</p>
        <p>Update</p>
        <p>Delete</p>
        <p>Confirmation dialogs (Bootstrap)</p>
        <p>Modal dialogs (Bootstrap)</p>
      </div>
    );
  }
}

export default AboutModule;
