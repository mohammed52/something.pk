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

var bootbox = require('bootbox');


class SingleCardRowComponent extends Component {

  constructor(props) {
    super(props);
    this.deleteCard = this.deleteCard.bind(this)
  }

  deleteCard() {

    const deleteCardMessage = "Do you want to delete Card? This cannot be undone."
    bootbox.confirm({
      title: "Delete Card?",
      message: deleteCardMessage,
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

          console.log("delete");
          const deleteCardFromBank = this.props.deleteCardFromBank;
          deleteCardFromBank(this.props.card)

        } else {
          console.log("result", result)
        }
      }.bind(this)
    });
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.iteration + 1}
        </td>
        <td>
          {this.props.card}
        </td>
        <td>
          <button className="btn btn-link"
                  type="button"
                  onClick={this.deleteCard}>
            <i className="fa fa-trash-o"
               aria-hidden="true" />
          </button>
        </td>
      </tr>
    );
  }
}

SingleCardRowComponent.propTypes = {
  card: PropTypes.string.isRequired,
  iteration: PropTypes.number.isRequired,
  deleteCardFromBank: PropTypes.func.isRequired
};

export default SingleCardRowComponent;
