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

// const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET
// const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL

const CLOUDINARY_UPLOAD_PRESET = 'somethingpk_default_preset';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dk4gji43k/image/upload';

class DiscountsComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.btnAddRestaurant = this.btnAddRestaurant.bind(this)
  //   this.onChangeRestaurantName = this.onChangeRestaurantName.bind(this)
  //   this.open = this.open.bind(this)
  //   this.close = this.close.bind(this)

  //   this.state = {
  //     uploadedRestaurantLogo: null,
  //     uploadedRestaurantLogoCloudinaryUrl: '',
  //     restaurantNameField: "",
  //     showModal: true
  //   };
  // }


  render() {

    return (
      <div>
        <br/> BETA - have a feature in mind for this website? talk to me, let me buy you a drink :)
      </div>
    );
  }
}

DiscountsComponent.propTypes = {
  deals: PropTypes.array.isRequired,
  banks: PropTypes.array.isRequired,
  restaurants: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired
};

export default DiscountsComponent;
