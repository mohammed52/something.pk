import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import BankSettingsPanelContent from './BankSettingsPanelContent'
import { cityIsEnabled } from './helpers/settingsHelpers'

var ReactBootstrap = require('react-bootstrap');
// var Accordion = ReactBootstrap.Accordion;
// var Panel = ReactBootstrap.Panel;
var Modal = ReactBootstrap.Modal;
// var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var Button = ReactBootstrap.Button;
// var FieldGroup = ReactBootstrap.FieldGroup;

var Accordion = ReactBootstrap.Accordion;
var Panel = ReactBootstrap.Panel;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Checkbox = ReactBootstrap.Checkbox

class SettingsModal extends Component {

  constructor(props) {
    super(props)
    this.btnSave = this.btnSave.bind(this)
    this.onChangeCitiesCheckBoxGroup = this.onChangeCitiesCheckBoxGroup.bind(this)
    
    const cities = this.props.cities
    var citiesSettings = []
    
    for (var i = 0; i < cities.length; i++) {
      if (i===1) {

      citiesSettings.push(
        true
        )
      } else {
      citiesSettings.push(
        false
        ) 

      }
    }

    this.state = {
        citiesSettings,
      };


  }

  btnSave() {
    console.log("btnSave");
    const saveSettings = this.props.saveSettings
    saveSettings()

  }

  onChangeCitiesCheckBoxGroup(refName, event) {
    console.log("onChangeCitiesCheckBoxGroup");

    const index = Number(refName.charAt(0))
    var tmpCitiesSettings = this.state.citiesSettings

    tmpCitiesSettings[index] = !this.state.citiesSettings[index]

    this.setState({
      citiesSettings: tmpCitiesSettings
    })

  }

  render() {

    const banksCardsSettings = this.props.banksCardsSettings
    const updateSettingsForCities = this.props.updateSettingsForCities

    var arrPanels = [];
    const banks = this.props.banks
    const updateSettingsForBank = this.props.updateSettingsForBank
    if (updateSettingsForBank !== null && 
      banks !== null && 
      banksCardsSettings !== null &&
      updateSettingsForCities !=null) {

      for (var i = 0; i < banks.length; i++) {
        var tmpBankCardSettings = null

        for (var j = 0; j < banksCardsSettings.length; j++) {
          if (banksCardsSettings[j].bank.id === banks[i].id) {
            tmpBankCardSettings = banksCardsSettings[j]
            break
          }
        }

        const cards = banks[i].cards
        arrPanels.push(
          <Panel header={<div>
                 <Checkbox checked={tmpBankCardSettings.bankEnabled}
                           inline
                           disabled={true} />
                 <span>{banks[i].fullName}</span>
               </div>}
                 eventKey={i + 1}
                 key={"arrPanelsPanel" + i}>
            <BankSettingsPanelContent cards={cards}
                                      bank={banks[i]}
                                      settings={tmpBankCardSettings}
                                      updateSettingsForBank={updateSettingsForBank} />
          </Panel>
        )


      }
    }
    const cities = this.props.cities
    var citiesArr = []

    const citiesSettings = this.state.citiesSettings

    for (var k = 0; k < cities.length; k++) {
      var cityIsSelected = cityIsEnabled(cities[k].name, this.state.citiesSettings)
      citiesArr.push(
        <div key={"arrCitiesCheckBox"+k}>
          <Checkbox onChange={this.onChangeCitiesCheckBoxGroup.bind(this, k + 'arrCitiesCheckBox')}
                    checked={cityIsSelected}
                    // checked={true}
                    >
          {cities[k].name}
          </Checkbox>
        </div>
      )

    }

    return (
      <Modal show={this.props.show}
             onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Settings
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Select Cities:</strong>
          {citiesArr}
          <FormGroup controlId="formControlsTextarea">
            <Accordion>
              {arrPanels}
            </Accordion>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary"
                  onClick={this.btnSave}>
            Save
          </Button>
          <Button onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

SettingsModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  saveSettings: PropTypes.func.isRequired,
  banks: PropTypes.array.isRequired,
  banksCardsSettings: PropTypes.array.isRequired,
  updateSettingsForBank: PropTypes.func.isRequired,
  updateSettingsForCities: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};


export default SettingsModal
