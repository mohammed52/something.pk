import React, { Component } from 'react';
import $ from 'jquery';
import BankSettingsPanelContent from './BankSettingsPanelContent'

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
      citiesSettings.push(
        true
        ) 
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

    // const index = Number(refName.charAt(0))
    // var tmpCardsSettings = this.state.cardsSettings

    // tmpCardsSettings[index].enabled = !this.state.cardsSettings[index].enabled

    // const updateSettingsForBank = this.props.updateSettingsForBank

    // updateSettingsForBank(tmpCardsSettings, this.props.bank.id)

  }

  render() {

    const banksCardsSettings = this.props.banksCardsSettings

    var arrPanels = [];
    const banks = this.props.banks
    const updateSettingsForBank = this.props.updateSettingsForBank
    if (updateSettingsForBank !== null && banks !== null && banksCardsSettings !== null) {

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

    for (var k = 0; k < cities.length; k++) {
      citiesArr.push(
        <div key={"arrCitiesCheckBox"+k}>
          <Checkbox onChange={this.onChangeCitiesCheckBoxGroup.bind(this, k + 'arrCitiesCheckBox')}
                    checked={this.state.citiesSettings[k]}
                    // checked={true}
                    >
          {cities[k].name}
          </Checkbox>
          <br/>
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


export default SettingsModal
