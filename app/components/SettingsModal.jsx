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
            enabled: false
          })
        }
      }

      tmpBankCardSettings.push({
        bank: banks[i],
        bankEnabled: false,
        cardSettings
      })
    }

    this.state = {
      banksCardsSettings: tmpBankCardSettings,
    };
  }


  btnSave() {
    console.log("btnSave");

  }

  render() {

    const bankCardSettings = this.state.bankCardSettings

    var arrPanels = [];
    const banks = this.props.banks
    tmpBankSettings = null
    for (var i = 0; i < banks.length; i++) {
      for (var j = 0; j < bankCardSettings.length; j++) {
        if (bankCardSettings[j].bank.id === banks[i].id) {
          tmpBankCardSettings = bankCardSettings[j]
          break
        }
      }

      const cards = banks[i].cards
      arrPanels.push(
        <Panel header={<div>
                 <Checkbox disabled={true}
                           inline />
                 <span>{banks[i].fullName}</span>
               </div>}
               eventKey={i + 1}
               key={"arrPanelsPanel" + i}>
          <BankSettingsPanelContent cards={cards}
                                    bank={banks[i]} />
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