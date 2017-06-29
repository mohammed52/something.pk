import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { createRestaurant, restaurants, destroyRestaurant } from '../actions/restaurantsActions';


import RestaurantsComponent from '../components/RestaurantsComponent'
// import AllCardsComponent from '../components/AllCardsComponent'


// import { createBank, destroyBank } from '../actions/banksActions';

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

class RestaurantsContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div>
        RestaurantsContainer
        <RestaurantsComponent />
      </div>
    );
  }
}

// CardsContainer.propTypes = {

// };

function mapStateToProps(state) {
  return {
    restaurants: state.restaurant.restaurants,
  };
}

export default connect(mapStateToProps, {
  createRestaurant,
  restaurants,
  destroyRestaurant
})(RestaurantsContainer);

