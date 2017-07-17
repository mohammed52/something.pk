import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DealComponent from '../components/DealComponent'
import { getCities } from '../actions/citiesActions';
import { getRestaurants } from '../actions/restaurantsActions';


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

  componentWillMount() {
    console.log("componentWillMount");
    const getCities = this.props.getCities
    const getRestaurants = this.props.getRestaurants
    getCities()
    getRestaurants()
  }

  render() {

    return (
      <div>
        deals container
        <DealComponent createDeal={this.props.createDeal}
                       destroyDeal={this.props.destroyDeal}
                       banks={this.props.banks}
                       restaurants={this.props.restaurants}
                       cities={this.props.cities} />
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
    restaurants: state.restaurant.restaurants,
    cities: state.restaurant.cities,
  // deals: state.deal.deals
  };
}

export default connect(mapStateToProps, {
  getRestaurants,
  getCities
})(DealsContainer);