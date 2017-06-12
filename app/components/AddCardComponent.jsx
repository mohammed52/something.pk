import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import bsStyles from '../css/bootstrap/css/bootstrap';
import testStyles from '../css/components/test';



const cxTest = classNames.bind(testStyles);
const cxBs = classNames.bind(bsStyles);

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
  constructor(props) {
    super(props);
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.state = {
      showModal: false
    };

  }

  componentDidMount() {
    $(this.getDOMNode()).modal('show');
    $(this.getDOMNode()).on('hidden.bs.modal', this.props.handleHideModal);
  }


  close() {
    this.setState({
      showModal: false
    });
  }

  open() {
    this.setState({
      showModal: true
    });
  }


  render() {



    return (
      <div>
        AddCardComponent
        <p className={cxBs("container-fluid"), cxTest('testbg-1')}>
          Click to get the full Modal experience!!
          <br/>
          <button className={cxBs("btn", "btn-primary", "btn-lg")}>
            try button
          </button>
        </p>
        <div className={cxBs("container")}>
          <h2>Modal Example</h2>
          <button type="button"
                  className={cxBs("btn", "btn-info", "btn-lg")}
                  data-toggle="modal"
                  data-target="#myModal">
            Open Modal
          </button>
          <div className={cxBs("modal", "fade")} id="myModal" role="dialog">
            <div className={cxBs("modal-dialog")}>
              <div className={cxBs("modal-content")}>
                <div className={cxBs("modal-header")}>
                  <button type="button" className={cxBs("close")} data-dismiss="modal">
                    ×
                  </button>
                  <h4 className={cxBs("modal-title")}>Modal Header</h4>
                </div>
                <div className={cxBs("modal-body")}>
                  <p>
                    Some text in the modal.
                  </p>
                </div>
                <div className={cxBs("modal-footer")}>
                  <button type="button" className={cxBs("btn", "btn-default")} data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
