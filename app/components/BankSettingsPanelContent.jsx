import React, { Component } from 'react';

var ReactBootstrap = require('react-bootstrap');
// var PanelGroup = ReactBootstrap.PanelGroup;
// var Panel = ReactBootstrap.Panel;
// var Accordion = ReactBootstrap.Accordion;
var Button = ReactBootstrap.Button;
var Checkbox = ReactBootstrap.Checkbox


class BankSettingsPanelContent extends Component {

  constructor(props) {
    super(props)

    this.onChangeCheckBoxGroup = this.onChangeCheckBoxGroup.bind(this)
    const {cards, bank, settings} = this.props
    var cardsSettings = settings.cardsSettings
    if (cardsSettings.length !== 0) {
      this.state = {
        cardsSettings,
      };

    } else {
      this.state = {
        cardsSettings: [{
          cardName: bank.fullName + "(Any Card)",
          enabled: true
        }]
      }
    }
  }

  onChangeCheckBoxGroup(refName, event) {

    const index = Number(refName.charAt(0))
    // console.log("index", index);
    var tmpCardsSettings = this.state.cardsSettings

    tmpCardsSettings[index].enabled = !this.state.cardsSettings[index].enabled

    const updateSettingsForBank = this.props.updateSettingsForBank

    updateSettingsForBank(tmpCardsSettings, this.props.bank.id)

  }

  render() {
    const {cards, bank, settings} = this.props
    const cardsSettings = this.state.cardsSettings

    var arrCardsCheckBox = []
    if (cards !== null && cards.length !== 0) {
      for (var i = 0; i < cards.length; i++) {
        arrCardsCheckBox.push(
          <div key={"arrCardsCheckBox" + i}>
            <Checkbox onChange={this.onChangeCheckBoxGroup.bind(this, i + 'arrCardsCheckBox')}
                      checked={this.state.cardsSettings[i].enabled}>
              {cardsSettings[i].cardName}
            </Checkbox>
          </div>
        )
      }
    } else {
      arrCardsCheckBox.push(
        <div key={"arrCardsCheckBox"}>
          <Checkbox onChange={this.onChangeCheckBoxGroup.bind(this, 0 + 'arrCardsCheckBox')}
                    checked={this.state.cardsSettings[0].enabled}>
            {this.state.cardsSettings[0].cardName}
          </Checkbox>
        </div>

      )
    }

    return (
      <div>
        {arrCardsCheckBox}
      </div>
    );
  }
}

export default BankSettingsPanelContent;
