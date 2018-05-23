import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div class="container">
                <div id="rowli"class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8 check">
                        <h5 class="descrip">{this.props.description}</h5>
                         <p>{this.props.event_number}</p>
                         <ul>
                            <li>{this.props.call_received}</li>
                             <li>{this.props.block}</li>
                             <li>{this.props.street_name}</li>
                         </ul>
                        </div>
                    <div class="col-md-2"></div>
                </div>
                
                {/* <h3>{this.props.description}</h3> */}
                {/* <table class="table table-striped">
                     <tbody>
                        <tr>
                            {/* <th scope="row">{this.props.event_number}</th> */}
                            {/* <td>{this.props.event_number}</td>
                            <td>{this.props.event_number}</td>
                            <td>{this.props.event_number}</td>
                            <td>{this.props.event_number}</td>
                            <td>{this.props.event_number}</td>
                            <td>{this.props.event_number}</td>
                        </tr>
                    </tbody>
                </table>  */}
            {/* <div onClick={this.toggle}>
                <h3>{this.props.description}</h3>
                <p>Disposition Description:{this.props.disposition_description}</p>
                <p>Event Number:{this.props.event_number}</p>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div> */}
            
         </div>
        );
    }
}

export default ListItem;