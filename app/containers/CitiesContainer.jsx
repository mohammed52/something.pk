import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import CitiesComponent from '../components/CitiesComponent'


import { createCity, destroyCity } from '../actions/citiesActions';

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



class CitiesContainer extends Component {

  render() {
    const banks = this.props.banks

    return (
      <div>
        CitiesContainer
        <CitiesComponent createCity={this.props.createCity}
                         cities={this.props.cities}
                         destroyCity={this.props.destroyCity} />
      </div>
    );
  }
}

CitiesContainer.propTypes = {
  cities: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    cities: state.city.cities,

  };
}

export default connect(mapStateToProps, {
  createCity,
  destroyCity
})(CitiesContainer);
