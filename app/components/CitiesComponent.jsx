import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';

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

const CLOUDINARY_UPLOAD_PRESET = 'somethingpk_default_preset';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dk4gji43k/image/upload';

class CitiesComponent extends Component {

  render() {

    return (
      <div>
        Cities Component
      </div>
    );
  }
}

CitiesComponent.propTypes = {
  children: PropTypes.object,
  createBank: PropTypes.func.isRequired,
  banks: PropTypes.array.isRequired,
  destroyBank: PropTypes.func.isRequired
};

export default CitiesComponent;
