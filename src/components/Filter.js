import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Filter.css';
import CollapseExample from './Collapse';
import LocationInput from './Location';
import DateInput from './Date';
import ComplaintInput from './Complaint';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

 
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpenLeft: false,
            locationValue: ''
        };
        
        this.submit = this.submit.bind(this);
    }
    

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    
    handleSubmit = () => {
        alert('A location was submitted: ' + this.state);
    }

    
    submit(event){
        this.props.submit(this.state);
        event.preventDefault();
    }
  
  render() {
    return (
         <div ref={ref => this.el = ref}>
                <button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                <i className="fas fa-filter"></i> FILTER
                </button>
            <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                title='Set CrimeChecker Filters:'
                from='left'
                width='85%'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <form onSubmit={this.submit}>
                    
                    <hr></hr>
                    <CollapseExample title="Type of Complaint" form={<ComplaintInput handleChange={this.props.handleChange}/>}/>
                    <hr></hr>
                    <CollapseExample title="Date of Crime" form={<DateInput handleChange={this.props.handleChange}/>}/>
                    <hr></hr> 
                    <CollapseExample value={this.props.value} title="Location" form={<LocationInput handleChange={this.props.handleChange}/>}/>
                    <hr></hr>
                    <input className="submit" type="submit" value="Submit" onClick={(event)=>{ console.log("Submit pressed."), this.props.submit2(event), event.preventDefault()}}/>
                </form>
            </SlidingPane>
        </div>
    );
  }
}

export default Filter;
