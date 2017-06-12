import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import AddCardComponent from '../components/AddCardComponent'

// import { createBank, destroyBank } from '../actions/banksActions';

// var ReactBootstrap = require('react-bootstrap')
// var Button = ReactBootstrap.Button
// var Modal = ReactBootstrap.Modal
// var FormGroup = ReactBootstrap.FormGroup
// var ControlLabel = ReactBootstrap.ControlLabel
// var FormControl = ReactBootstrap.FormControl
// var Radio = ReactBootstrap.Radio
// var Table = ReactBootstrap.Table
// var FieldGroup = ReactBootstrap.FieldGroup
// var Input = ReactBootstrap.Input



class CardsContainer extends Component {
  constructor(props) {
    super(props)
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
      <div>
        <AddCardComponent />
        <Button color="danger">
          Danger Button!
        </Button>
        <div>
          <Button color="danger" onClick={this.toggle}>
            {this.props.buttonLabel}
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>
              Modal title
            </ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Do Something
              </Button>
              {' '}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
      );
  }
}

CardsContainer.propTypes = {

};

function mapStateToProps(state) {
  // return {
  //   banks: state.bank.banks,
  // };
}

export default connect(mapStateToProps, {
  // createBank,
  // destroyBank
})(CardsContainer);
