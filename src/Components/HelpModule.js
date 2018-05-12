import React from "react";
import { Jumbotron, Panel } from "react-bootstrap";

class HelpModule extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className="header">
                    <h3><strong>Help</strong></h3>
                </Jumbotron>
                <Panel bsStyle="primary"><Panel.Body>
                <h4>
                    How to use this Application -
</h4>
                <p><strong>Code setup</strong></p>
                <p>1. Clone the repository at local machine</p>
                <p>2. Open Command prompt and run command : npm install, to load all dependencies.</p>
                <p>3. Run command : npm install -g json-server, to install json-server package to host REST API's locally.</p>
                <p></p>
                <p><strong>Start DB server Server</strong></p>
                <p>1. Open command prommt and change directory to where you cloned this repository.</p>
                <p>2. execute this command : json-server -p 4000 EmployeeDb.json</p>
                <p></p>
                <p><strong>Start Client side server</strong></p>
                <p>1. Open command prommt and change directory to where you cloned this repository.</p>
                <p>2. execute this command : npm start</p>
                <p></p>
                </Panel.Body></Panel>
            </div>
        );
    }
}

export default HelpModule;