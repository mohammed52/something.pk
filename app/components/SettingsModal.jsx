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
    this.updateSettingsForBank = this.updateSettingsForBank.bind(this)


    const banks = this.props.banks
    var tmpBankCardSettings = []
    for (var i = 0; i < banks.length; i++) {
      var cardsSettings = []
      const bankName = banks[i].fullName
      if (banks[i].cards.length !== 0) {
        const cards = banks[i].cards
        for (var j = 0; j < cards.length; j++) {
          cardsSettings.push({
            cardName: cards[j],
            enabled: true
          })
        }
      } else {
        cardsSettings.push({
          cardName: bankName + "(Any Card)",
          enabled: true
        })
      }

      tmpBankCardSettings.push({
        bank: banks[i],
        bankEnabled: true,
        cardsSettings
      })
    }

    this.state = {
      banksCardsSettings: tmpBankCardSettings,
    };
  }

  updateSettingsForBank(newCardSettings, bankId) {
    console.log("newCardSettings", newCardSettings);
    console.log("bankId", bankId);

    const banksCardsSettings = this.state.banksCardsSettings
    for (var i = 0; i < banksCardsSettings.length; i++) {
      if (banksCardsSettings[i].bank.id === bankId) {

        banksCardsSettings[i].cardsSettings = newCardSettings

        var tmpBankEnabled = false
        for (var i = 0; i < newCardSettings.length; i++) {
          if (newCardSettings[i].enabled === true) {
            tmpBankEnabled = true
          }
        }
        banksCardsSettings[i].bankEnabled = tmpBankEnabled
        break
      }
    }

    this.setState({
      banksCardsSettings
    })
  }

  btnSave() {
    console.log("btnSave");

  }

  render() {

    const banksCardsSettings = this.state.banksCardsSettings

    var arrPanels = [];
    const banks = this.props.banks

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
                                    updateSettingsForBank={this.updateSettingsForBank} />
        </Panel>
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
          <FormGroup controlId="formControlsTextarea">
            accordion panels
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
;


export default SettingsModal;