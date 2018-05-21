import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Filter.css';
import CollapseExample from './Collapse';
import LocationInput from './Location';
import DateInput from './Date';
import ComplaintInput from './Complaint';
 
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpenLeft: false
        };
    }
 
    componentDidMount() {
        Modal.setAppElement(this.el);
    }
  
  render() {
    return (
         <div ref={ref => this.el = ref}>
                <button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                    Click me to open left pane with 20% width!
                </button>
            <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                title='Filter'
                from='left'
                width='85%'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <hr></hr>
                <CollapseExample title="Type of Complaint" form={<ComplaintInput/>}/>
                <hr></hr>
                <CollapseExample title="Date of Crime" form={<DateInput/>}/>
                <hr></hr>
                <CollapseExample title="Location" form={<LocationInput/>}/>
                <hr></hr>
            </SlidingPane>
        </div>
    );
  }
}

export default Filter;
