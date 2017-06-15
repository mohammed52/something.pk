import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalComponent from '../components/ModalComponent'


import AddCardComponent from '../components/AddCardComponent'
import bsStyles from '../css/bootstrap/css/bootstrap';
const cxBs = classNames.bind(bsStyles);
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
    this.handleHideModal = this.handleHideModal.bind(this)
    this.handleShowModal = this.handleShowModal.bind(this)
    this.state = {
      view: {
        showModal: false
      }
    };
  }

  handleHideModal() {
    this.setState({
      view: {
        showModal: false
      }
    })
  }

  handleShowModal() {
    this.setState({
      view: {
        showModal: true
      }
    })
  }

  render() {

    return (
      <div>
        <AddCardComponent />
        <div className="row">
          <button className={cxBs("btn", "btn-default", "btn-block")}
                  onClick={this.handleShowModal}>
            Open Modal
          </button>
          {this.state.view.showModal ? <ModalComponent handleHideModal={this.handleHideModal} /> : null}
        </div>
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
