import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"

// import styles from '../css/components/dashboard';

// const cx = classNames.bind(styles);

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

class SingleBankRowComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const bank = this.props.bank;
    const iterator = this.props.iterator

    // return <div>
    //          Hello ?
    //        </div>

    // const bank = this.props.bank;
    // const key = this.props.key;
    // const iterator = this.props.iterator

    return (
      <tr>
        <td>
          {iterator + 1}
        </td>
        <td>
          <div>
            {typeof bank.logoUrl === "undefined" ? <div>
                                                     no-image
                                                   </div> : <img src={bank.logoUrl}
                                                                 alt={bank.fullName}
                                                                 height="100"
                                                                 width="100" />}
          </div>
        </td>
        <td>
          {bank.fullName}
        </td>
        <td>
          {bank.shortName}
        </td>
        <td>
          delete
        </td>
      </tr>
    );
  }
}

SingleBankRowComponent.propTypes = {
  bank: PropTypes.object.isRequired,
  iterator: PropTypes.number.isRequired
};

export default SingleBankRowComponent;