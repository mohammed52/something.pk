import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import testStyles from '../css/components/test';



const cxTest = classNames.bind(testStyles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
var ReactBootstrap = require('react-bootstrap')
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup
var ControlLabel = ReactBootstrap.ControlLabel
var FormControl = ReactBootstrap.FormControl
var Radio = ReactBootstrap.Radio;
var Table = ReactBootstrap.Table
var FieldGroup = ReactBootstrap.FieldGroup
var Input = ReactBootstrap.Input


class AddCardComponent extends Component {

  render() {
    return (
      <div>
        AddCardComponent
        <p className={cxTest('testbg-1')}>
          Click to get the full Modal experience!!
          <br/>
          <button>
            try button
          </button>
          <button className="btn btn-danger">
            Danger!
          </button>
          <Button bsStyle="success">
            Success
          </Button>
        </p>
      </div>
    );
  }
}

AddCardComponent.propTypes = {
  // children: PropTypes.object,
  // createBank: PropTypes.func.isRequired,
  // banks: PropTypes.array.isRequired,
  // destroyBank: PropTypes.func.isRequired
};

export default AddCardComponent;
