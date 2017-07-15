import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DealComponent from '../components/DealComponent'

// import { createDeal, destroyDeal } from '../actions/dealsActions';

var ReactBootstrap = require('react-bootstrap')
var Button = ReactBootstrap.Button
var Modal = ReactBootstrap.Modal
var FormGroup = ReactBootstrap.FormGroup
var ControlLabel = ReactBootstrap.ControlLabel
var FormControl = ReactBootstrap.FormControl
var Radio = ReactBootstrap.Radio
var Table = ReactBootstrap.Table
var FieldGroup = ReactBootstrap.FieldGroup
var Input = ReactBootstrap.Input



class DealsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {destroyDeal} = this.props

    return (
      <div>
        deals container
        <DealComponent createDeal={this.props.createDeal}
                       deals={this.props.deals}
                       destroyDeal={this.props.destroyDeal}
                       banks={this.props.banks} />
      </div>
    );
  }
}

DealsContainer.propTypes = {
  // children: PropTypes.object,
  // createDeal: PropTypes.func.isRequired,
  // destroyDeal: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    banks: state.bank.banks,
  // deals: state.deal.deals
  };
}

export default connect(mapStateToProps, {
  // createDeal,
  // destroyDeal
})(DealsContainer);
