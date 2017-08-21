import React, { Component } from 'react';

var ReactBootstrap = require('react-bootstrap');
// var PanelGroup = ReactBootstrap.PanelGroup;
// var Panel = ReactBootstrap.Panel;
// var Accordion = ReactBootstrap.Accordion;
var Button = ReactBootstrap.Button;
var Checkbox = ReactBootstrap.Checkbox


class BankSettingsPanelContent extends Component {
  render() {
    const {cards, bank} = this.props
    var arrCardsCheckBox = []
    if (cards !== null && cards.length !== 0) {
      for (var i = 0; i < cards.length; i++) {
        arrCardsCheckBox.push(
          <div key={"arrCardsCheckBox" + i}>
            <Checkbox>
              {cards[i]}
            </Checkbox>
          </div>
        )
      }
    } else {
      arrCardsCheckBox.push(
        <div key={"arrCardsCheckBox" + i}>
          <Checkbox>
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