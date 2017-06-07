import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';
import styles from '../font-awesome-4.7.0/css/font-awesome.css'
import bsStyles from '../css/bootstrap/css/bootstrap';
import testStyles from '../css/components/test';
const cx = classNames.bind(styles);

const cxBs = classNames.bind(bsStyles);
const cxTest = classNames.bind(testStyles);

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
    this.deleteBank = this.deleteBank.bind(this)
  }

  deleteBank() {
    const MAPLOG = true;
    if (MAPLOG) console.log("deleteBank");
    const bank = this.props.bank
    const {destroyBank} = this.props

    destroyBank(bank.id)
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
      <tr className={cxTest('testbg-1')}>
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
        <td className={cxTest('testbg-1')}>
          {bank.shortName}
        </td>
        <td>
          <button className={cxBs('btn', 'btn-link'), cxTest('testbg-1')}
                  type="button"
                  onClick={this.deleteBank}>
            <i className={cx('fa', 'fa-trash-o')}
               aria-hidden="true" />
          </button>
        </td>
      </tr>
    );
  }
}

SingleBankRowComponent.propTypes = {
  bank: PropTypes.object.isRequired,
  iterator: PropTypes.number.isRequired,
  destroyBank: PropTypes.func.isRequired
};

export default SingleBankRowComponent;
