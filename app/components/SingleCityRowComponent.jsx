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

var bootbox = require('bootbox');


const ENTER_KEY_CODE = 13;

class SingleCityRowComponent extends Component {

  constructor(props) {
    super(props)
    this.deleteACity = this.deleteACity.bind(this)
  }

  deleteACity() {


    const deleteCityMessage = "Do you want to delete City? This cannot be undone."
    bootbox.confirm({
      title: "City Card?",
      message: deleteCityMessage,
      buttons: {
        cancel: {
          label: '<i class="fa fa-times"></i> Cancel',
          className: 'btn-default'
        },
        confirm: {
          label: '<i class="fa fa-check"></i> Delete',
          className: 'btn-danger'
        }
      },
      callback: function(result) {
        const MAPLOG = true
        if (result === true) {

          const destroyCity = this.props.destroyCity
          destroyCity(this.props.city.id)

        } else {
          console.log("result", result)
        }
      }.bind(this)
    });
  }

  render() {
    const city = this.props.city
    const index = this.props.index

    return (
      <tr>
        <td>
          {index + 1}
        </td>
        <td>
          {city.name}
        </td>
        <td>
          {city.shortCode}
        </td>
        <td>
          <button className="btn btn-link"
                  type="button"
                  onClick={this.deleteACity}>
            <i className="fa fa-trash-o"
               aria-hidden="true" />
          </button>
        </td>
      </tr>
    );
  }
}

SingleCityRowComponent.propTypes = {
  city: PropTypes.object.isRequired,
  destroyCity: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default SingleCityRowComponent;
