import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';
import SingleBankRowComponent from './SingleBankRowComponent'
// import { Button } from 'react-bootstrap';

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

class AddBankComponent extends Component {
  constructor(props) {
    super(props);
    this.btnAddBank = this.btnAddBank.bind(this)
    this.onChangeFullName = this.onChangeFullName.bind(this)
    this.onChangeShortName = this.onChangeShortName.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: '',
      fullNameField: "",
      shortNameField: "",
      showModal: true
    };
  }



  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
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
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  btnAddBank() {

    let tmpBank = {
      fullName: this.state.fullNameField,
      shortName: this.state.shortNameField,
      logoUrl: this.state.uploadedFileCloudinaryUrl,
      cards: ["card1", "card2"]
    }

    // this.refs.someName.refBankFullName = '';

    this.refs.refBankFullName.value = '';
    this.refs.refBankShortName.value = '';

    this.setState({
      fullNameField: "",
      shortNameField: "",
      uploadedFileCloudinaryUrl: ""
    })

    const {createBank} = this.props;
    createBank(tmpBank)
  }

  onChangeFullName(event) {
    const MAPLOG = true;
    if (MAPLOG) console.log(event.target.value);
    this.setState({
      fullNameField: event.target.value
    })
  }
  onChangeShortName(event) {
    const MAPLOG = true;
    if (MAPLOG) console.log(event.target.value);
    this.setState({
      shortNameField: event.target.value
    })
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

    const allBanks = this.props.banks.slice();

    // allBanks.sort((a, b) => {
    //   return a.fullName > b.fullName
    // })


    let trArrBanks = []

    for (var i = 0; i < allBanks.length; i++) {

      const tmpBank = allBanks[i]
      const tmpKey = "SingleBankRowComponent" + i + tmpBank.id
      const tmpIterator = i
      trArrBanks.push(
        <SingleBankRowComponent key={tmpKey}
                                bank={tmpBank}
                                iterator={tmpIterator}
                                destroyBank={this.props.destroyBank} />
      );
    }
    return (
      <div>
        <form className="testbg-1">
          <h3>Add New Bank</h3>
          <div className="well">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <ControlLabel>
                      Full Name
                    </ControlLabel>
                    <br/>
                    <input id="id-bank-full-name"
                           required="true"
                           onChange={this.onChangeFullName}
                           defaultValue={this.state.fullNameField}
                           ref="refBankFullName" />
                    <br/>
                    <br/>
                    <ControlLabel>
                      Short Name
                    </ControlLabel>
                    <br/>
                    <input id="id-bank-short-name"
                           required="true"
                           onChange={this.onChangeShortName}
                           defaultValue={this.state.shortNameField}
                           ref="refBankShortName" />
                  </td>
                  <td>
                    <Dropzone multiple={false}
                              accept="image/jpg,image/png,image/jpeg"
                              onDrop={this.onImageDrop.bind(this)}>
                      <p>
                        Drop an image or click to select a file to upload.
                      </p>
                    </Dropzone>
                  </td>
                  <td>
                    <div>
                      {this.state.uploadedFileCloudinaryUrl === '' ? null :
                       <div>
                         <p>
                           {this.state.uploadedFile.name}
                         </p>
                         <img src={this.state.uploadedFileCloudinaryUrl}
                              alt="uploaded image" />
                       </div>}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-primary"
                    type="button"
                    onClick={this.btnAddBank}
                    disabled={(this.state.uploadedFileCloudinaryUrl !== ""
                              && this.refs.refBankFullName.value !== "" &&
                              this.refs.refBankShortName.value !== "") ? false : true}>
              Add Bank
            </button>
            <br/>
          </div>
        </form>
        <div>
          <h4>All Existing Banks</h4>
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
                    Full Name
                  </th>
                  <th>
                    Short Name
                  </th>
                  <th>
                    Actions
                  </th>
                </tr>
                {trArrBanks}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

AddBankComponent.propTypes = {
  children: PropTypes.object,
  createBank: PropTypes.func.isRequired,
  banks: PropTypes.array.isRequired,
  destroyBank: PropTypes.func.isRequired
};

export default AddBankComponent;
