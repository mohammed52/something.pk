import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import AddCardComponent from '../components/AddCardComponent'


// import { createBank, destroyBank } from '../actions/banksActions';

var ReactBootstrap = require('react-bootstrap')
var Button = ReactBootstrap.Button
var Modal = ReactBootstrap.Modal
var FormGroup = ReactBootstrap.FormGroup
var ControlLabel = ReactBootstrap.ControlLabel
var FormControl = ReactBootstrap.FormControl
var Radio = ReactBootstrap.Radio
var Table = ReactBootstrap.Table
var FieldGroup = ReactBootstrap.FieldGroup
var Input = ReactBootstrap.Input



class CardsContainer extends Component {
  constructor(props) {
    super(props)
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({
      showModal: false
    })
  }

  open() {
    this.setState({
      showModal: true
    })
  }

  render() {

    return (
      <div>
        <AddCardComponent />
        <div className="row">
          <button onClick={this.open}>
            Open Modal
          </button>
        </div>
        <Modal show={this.state.showModal}
               onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// CardsContainer.propTypes = {

// };

// function mapStateToProps(state) {
// return {
//   banks: state.bank.banks,
// };
// }

// export default connect(mapStateToProps, {
// createBank,
// destroyBank
// })(CardsContainer);

export default CardsContainer
