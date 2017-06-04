import React, { Component } from 'react';
import PropTypes from 'prop-types';
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



class DashboardContainer extends Component {
  constructor(props) {
    super(props);

  // this.state = {
  //   uploadedFileCloudinaryUrl: ''
  // };
  }

  render() {

    const {children} = this.props;

    return (
      <div>
        Dashbord is empty
      </div>
    );
  }
}

DashboardContainer.propTypes = {
  children: PropTypes.object
};

export default DashboardContainer;
