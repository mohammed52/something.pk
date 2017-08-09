import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DealComponent from '../components/DealComponent'
import { getCities } from '../actions/citiesActions';
import { getRestaurants } from '../actions/restaurantsActions';
import { getDeals, createDeal, destroyDeal, updateDeals } from '../actions/dealsActions';


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
    const getDeals = this.props.getDeals
    getCities()
    getRestaurants()
    getDeals()
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  // const getCities = this.props.getCities
  // const getRestaurants = this.props.getRestaurants
  // const getDeals = this.props.getDeals
  // getCities()
  // getRestaurants()
  // getDeals()
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  render() {

    return (
      <div>
        deals container
        <DealComponent createDeal={this.props.createDeal}
                       destroyDeal={this.props.destroyDeal}
                       updateDeals={this.props.updateDeals}
                       
                       banks={this.props.banks}
                       restaurants={this.props.restaurants}
                       cities={this.props.cities}
                       deals={this.props.deals} />
      </div>
    );
  }
}

DealsContainer.propTypes = {
  banks: PropTypes.array.isRequired,
  deals: PropTypes.array.isRequired,
  restaurants: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,

  destroyDeal: PropTypes.func.isRequired,
  updateDeals: PropTypes.func.isRequired
};


function mapStateToProps(state) {
  return {
    cities: state.city.cities,
    banks: state.bank.banks,
    restaurants: state.restaurant.restaurants,
    deals: state.deal.deals,

  };
}

export default connect(mapStateToProps, {
  getRestaurants,
  getCities,
  getDeals,
  createDeal,
  destroyDeal,
  updateDeals
})(DealsContainer);
