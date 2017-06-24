import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';

import testStyles from '../css/components/test';

const cxTest = classNames.bind(testStyles);

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

const ENTER_KEY_CODE = 13;

class CitiesComponent extends Component {

  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onNewCityInputChange = this.onNewCityInputChange.bind(this);
    this.onNewCityShortCodeChange = this.onNewCityShortCodeChange.bind(this);

    this.state = {
      newCityName: "",
      newCityShortCode: ""
    }
  }
  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      if (this.state.newCityName !== "" && this.state.newCityShortCode !== "") {
        console.log("enter Pressed");
        const createCity = this.props.createCity

        const newCity = {
          name: this.state.newCityName,
          shortCode: this.state.newCityShortCode
        }

        createCity(newCity)
        this.refs.refInputNewCityName.value = '';
        this.refs.refInputNewCityShortCode.value = '';
      }
    }
  }

  onNewCityInputChange(event) {
    this.setState({
      newCityName: event.target.value
    })
  }

  onNewCityShortCodeChange(event) {
    this.setState({
      newCityShortCode: event.target.value
    })

  }

  render() {

    var arrSingleCityRowComponent = []

    const cities = this.props.cities
    if (cities.length !== undefined) {
      for (var i = 0; i < cities.length; i++) {
        const city = cities[i]
        arrSingleCityRowComponent.push(
          <tr key={"arrSingleCityRowComponent" + i}>
            <th>
              {i + 1}
            </th>
            <th>
              {city.name}
            </th>
            <th>
              {city.shortCode}
            </th>
            <th>
              [delete]
            </th>
          </tr>

        )
      }
    }


    return (
      <div>
        Cities Component
        <br/>
        <h4>Add City</h4>
        <ControlLabel>
          Name:
        </ControlLabel>
        <input id="id-new-city-name"
               onKeyDown={this.onKeyDown}
               ref="refInputNewCityName"
               onChange={this.onNewCityInputChange} />
        <br/>
        <br/>
        <ControlLabel>
          Short Code:
        </ControlLabel>
        <input id="id-new-city-short-code"
               onKeyDown={this.onKeyDown}
               ref="refInputNewCityShortCode"
               onChange={this.onNewCityShortCodeChange} />
        <br/>
        <div className="well">
          cities here
          <table className="table">
            <tbody>
              <tr>
                <th>
                  S/N
                </th>
                <th>
                  Name
                </th>
                <th>
                  Short Code
                </th>
                <th>
                  Actions
                </th>
              </tr>
              {arrSingleCityRowComponent}
            </tbody>
          </table>
        </div>
      </div>
      );
  }
}

CitiesComponent.propTypes = {
  children: PropTypes.object,
  createCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
};

export default CitiesComponent;
