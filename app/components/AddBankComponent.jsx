import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import SingleBankRowComponent from './SingleBankRowComponent'

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

const CLOUDINARY_UPLOAD_PRESET = 'somethingpk_default_preset';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dk4gji43k/image/upload';

class AddBankComponent extends Component {
  constructor(props) {
    super(props);
    this.btnAddBank = this.btnAddBank.bind(this)

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
  }



  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
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
      fullName: $("#id-bank-full-name").val(),
      shortName: $("#id-bank-short-name").val(),
      logoUrl: this.state.uploadedFileCloudinaryUrl
    }

    const {createBank} = this.props;
    createBank(tmpBank)

  }

  render() {

    const {children} = this.props;

    const allBanks = this.props.banks;
    let trArrBanks = []
    for (var i = 0; i < allBanks.length; i++) {

      const tmpBank = allBanks[i]
      const tmpKey = "SingleBankRowComponent" + i + tmpBank.id
      const tmpIterator = i
      trArrBanks.push(
        <SingleBankRowComponent key={tmpKey}
                                bank={tmpBank}
                                iterator={tmpIterator} />
      );
    }
    return (
      <div>
        <form className="testbg-1">
          <h3>Add New Bank</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <ControlLabel>
                    Full Name
                  </ControlLabel>
                  <br/>
                  <FormControl type="text"
                               id="id-bank-full-name"
                               required="true"
                               defaultValue="try me" />
                  <br/>
                  <br/>
                  <ControlLabel>
                    Short Name
                  </ControlLabel>
                  <br/>
                  <FormControl type="text"
                               id="id-bank-short-name"
                               required="true"
                               defaultValue="try me" />
                </td>
                <td>
                  <Dropzone multiple={false}
                            accept="image/jpg,image/png"
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
                       <img src={this.state.uploadedFileCloudinaryUrl} />
                     </div>}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <Button onClick={this.btnAddBank}
                  disabled={this.state.uploadedFileCloudinaryUrl !== "" ? false : true}>
            Add Bank
          </Button>
        </form>
        <div>
          <h4>All Existing Banks</h4>
          <br/>
          <div>
            <table>
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
  banks: PropTypes.array.isRequired
};

export default AddBankComponent;
