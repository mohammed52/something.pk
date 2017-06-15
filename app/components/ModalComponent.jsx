import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';

import bsStyles from '../css/bootstrap/css/bootstrap';
import testStyles from '../css/components/test';

const cxTest = classNames.bind(testStyles);
const cxBs = classNames.bind(bsStyles);

window.jQuery = require('jquery');
import '../css/bootstrap/js/bootstrap.js';

class ModalComponent extends Component {

  componentDidMount() {
    $(ReactDOM.findDOMNode()).modal('show').bind(this);
    $(ReactDOM.findDOMNode()).on('hidden.bs.modal', this.props.handleHideModal).bind(this);
  }


  render() {
    return (
      <div className={cxBs("modal", "fade")}>
        <div className={cxBs("modal-dialog")}>
          <div className={cxBs("modal-content")}>
            <div className={cxBs("modal-header")}>
              <button type="button"
                      className={cxBs("close")}
                      data-dismiss="modal"
                      aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className={cxBs("modal-title")}>Modal title</h4>
            </div>
            <div className={cxBs("modal-body")}>
              <p>
                One fine body…
              </p>
            </div>
            <div className={cxBs("modal-footer")}>
              <button type="button"
                      className={cxBs("btn", "btn-default")}
                      data-dismiss="modal">
                Close
              </button>
              <button type="button"
                      className={cxBs("btn", "btn-primary")}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ModalComponent.propTypes = {
  handleHideModal: React.PropTypes.func.isRequired
};

export default ModalComponent;
