import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';
// import { Button } from 'react-bootstrap';
import SingleRestaurantRowComponent from './SingleRestaurantRowComponent'

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

// const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET
// const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL

const CLOUDINARY_UPLOAD_PRESET = 'somethingpk_default_preset';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dk4gji43k/image/upload';

class RestaurantComponent extends Component {
  constructor(props) {
    super(props);
    this.btnAddRestaurant = this.btnAddRestaurant.bind(this)
    this.onChangeRestaurantName = this.onChangeRestaurantName.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)

    this.state = {
      uploadedRestaurantLogo: null,
      uploadedRestaurantLogoCloudinaryUrl: '',
      restaurantNameField: "",
      showModal: true
    };
  }



  onImageDrop(files) {
    this.setState({
      uploadedRestaurantLogo: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {

    console.log(process.env)

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedRestaurantLogoCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  btnAddRestaurant() {

    let tmpRestaurant = {
      name: this.state.restaurantNameField,
      logoUrl: this.state.uploadedRestaurantLogoCloudinaryUrl,
    }

    // this.refs.someName.refRestaurantFullName = '';

    this.refs.refRestaurantFullName.value = '';

    this.setState({
      restaurantNameField: "",
      uploadedRestaurantLogoCloudinaryUrl: ""
    })

    const {createRestaurant} = this.props;
    createRestaurant(tmpRestaurant)
  }

  onChangeRestaurantName(event) {
    const MAPLOG = true;
    if (MAPLOG) console.log(event.target.value);
    this.setState({
      restaurantNameField: event.target.value
    });
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

    const {children} = this.props;

    const allRestaurants = this.props.restaurants;
    let trArrRestaurants = []
    for (var i = 0; i < allRestaurants.length; i++) {

      const tmpRestaurant = allRestaurants[i]
      const tmpKey = "SingleRestaurantRowComponent" + i + tmpRestaurant.id
      const tmpIterator = i
      trArrRestaurants.push(
        <SingleRestaurantRowComponent key={tmpKey}
                                      restaurant={tmpRestaurant}
                                      iteration={tmpIterator}
                                      destroyRestaurant={this.props.destroyRestaurant} />
      );
    }

    var addRestaurantDisable = true
    if (this.refs.refRestaurantFullName !== undefined) {

      if (this.refs.refRestaurantFullName.value !== "") {
        addRestaurantDisable = false
      } else
        addRestaurantDisable = true

    }


    return (
      <div>
        <form className="testbg-1">
          <h3>Add New Restaurant</h3>
          <div className="well">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <ControlLabel>
                      Name
                    </ControlLabel>
                    <br/>
                    <input id="id-restaurant-full-name"
                           required="true"
                           onChange={this.onChangeRestaurantName}
                           defaultValue={this.state.restaurantNameField}
                           ref="refRestaurantFullName" />
                    <br/>
                    <br/>
                  </td>
                  <td>
                    <Dropzone multiple={false} accept="image/jpg,image/png,image/jpeg" onDrop={this.onImageDrop.bind(this)}>
                      <p>
                        Drop an image or click to select a file to upload.
                      </p>
                    </Dropzone>
                  </td>
                  <td>
                    <div>
                      {this.state.uploadedRestaurantLogoCloudinaryUrl === '' ? null :
                       <div>
                         <p>
                           {this.state.uploadedRestaurantLogo.name}
                         </p>
                         <img src={this.state.uploadedRestaurantLogoCloudinaryUrl} alt="uploaded image" />
                       </div>}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-primary"
                    type="button"
                    onClick={this.btnAddRestaurant}
                    disabled={addRestaurantDisable}>
              Add Restaurant
            </button>
            <br/>
          </div>
        </form>
        <div>
          <h4>All Existing Restaurants</h4>
          <div className="well">
            <table className="table">
              <tbody>
                <tr>
                  <th>
                    S/N
                  </th>
                  <th>
                    Logo
                  </th>
                  <th>
                    Name
                  </th>
                  <th>
                    Actions
                  </th>
                </tr>
                {trArrRestaurants}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      );
  }
}

RestaurantComponent.propTypes = {
  createRestaurant: PropTypes.func.isRequired,
  restaurants: PropTypes.array.isRequired,
  destroyRestaurant: PropTypes.func.isRequired
};

export default RestaurantComponent;
