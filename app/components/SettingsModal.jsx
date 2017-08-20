import React from 'react';
import $ from 'jquery';

var ReactBootstrap = require('react-bootstrap');
// var Accordion = ReactBootstrap.Accordion;
// var Panel = ReactBootstrap.Panel;
var Modal = ReactBootstrap.Modal;
// var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var Button = ReactBootstrap.Button;
// var FieldGroup = ReactBootstrap.FieldGroup;


var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;

var SettingsModal = React.createClass({

  btnSave: function() {
    console.log("btnSave");

  },

  render() {

    return (
      <Modal show={this.props.showSettingsModal}
             onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Settings
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>
              Receipe
            </ControlLabel>
            <FormControl componentClass="input"
                         id="id-text-new-name"
                         placeholder="Enter Name of Recepie" />
            <ControlLabel>
              Ingredients
            </ControlLabel>
            <FormControl componentClass="textarea"
                         placeholder="Enter ingredients seperated by Commas"
                         id="id-text-new-ingredients" />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary"
                  onClick={this.btnSave}>
            Save
          </Button>
          <Button onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
});


export default SettingsModal;