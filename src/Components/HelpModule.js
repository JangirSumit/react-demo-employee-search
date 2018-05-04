import React from "react";
import { Jumbotron } from "react-bootstrap";

class HelpModule extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h3><strong>Help</strong></h3>
                </Jumbotron>
                <h4>
                    How to use this Application -
</h4>
                <p><strong>Start DB server Server</strong></p>
                <p>1. Open command prommt and change directory to where you cloned this repository.</p>
                <p>2. execute this command : json-server -p 4000 EmployeeDb.json</p>
                <p></p>
                <p><strong>Start Client side server</strong></p>
                <p>1. Open command prommt and change directory to where you cloned this repository.</p>
                <p>2. execute this command : npm start</p>
                <p></p>
            </div>
        );
    }
}

export default HelpModule;