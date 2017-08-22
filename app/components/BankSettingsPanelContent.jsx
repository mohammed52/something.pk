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
      this.setState({
        cardsSettings: [false]
      })
    }
  }

  onChangeCheckBoxGroup(refName, event) {

    const index = Number(refName.charAt(0))
    // console.log("index", index);
    var tmpCardsSettings = this.state.cardsSettings

    tmpCardsSettings[index] = !this.state.cardsSettings[index].enabled
    this.setState({
      cardsSettings: tmpCardsSettings
    })

  }

  render() {
    const {cards, bank, settings} = this.props
    const cardsSettings = this.state.cardsSettings
    var arrCardsCheckBox = []
    if (cards !== null && cards.length !== 0) {
      for (var i = 0; i < cards.length; i++) {
        arrCardsCheckBox.push(
          <div key={"arrCardsCheckBox" + i}>
            <Checkbox onChange={this.onChangeCheckBoxGroup.bind(this, i + 'arrCardsCheckBox')} checked={this.state.cardsChecked[i]}>
              {cardsSettings[i].cardName}
            </Checkbox>
          </div>
        )
      }
    } else {
      arrCardsCheckBox.push(
        <div key={"arrCardsCheckBox"}>
          <Checkbox onChange={this.onChangeCheckBoxGroup.bind(this, 0 + 'arrCardsCheckBox')} checked={this.state.cardsChecked[0]}>
            {bank.fullName + " (Any Card)"}
          </Checkbox>
        </div>

      )
    }
    if (bank.fullName === "Faysal Bank Limited") {
      console.log("Faysal Bank Limited");
    }

    return (
      <div>
        {arrCardsCheckBox}
      </div>
      );
  }
}

export default BankSettingsPanelContent;