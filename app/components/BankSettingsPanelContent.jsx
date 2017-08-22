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
    const {cards, bank} = this.props
    var tmpCardsDeal = []

    if (cards.length == 0) {
      tmpCardsDeal.push(false)
    } else {
      for (var i = 0; i < cards.length; i++) {
        tmpCardsDeal.push(false)
      }
    }

    this.state = {
      cardsChecked: tmpCardsDeal,
    };
  }

  onChangeCheckBoxGroup(refName, event) {
    // console.log("onChangeCheckBoxGroup");
    // console.log("event.target.value", event.target.value);
    // console.log("event.target", event.target);

    const index = Number(refName.charAt(0))
    // console.log("index", index);
    var tmpCardsChecked = this.state.cardsChecked

    tmpCardsChecked[index] = !this.state.cardsChecked[index]
    this.setState({
      cardsChecked: tmpCardsChecked
    })

  }

  render() {
    const {cards, bank} = this.props
    var arrCardsCheckBox = []
    if (cards !== null && cards.length !== 0) {
      for (var i = 0; i < cards.length; i++) {
        arrCardsCheckBox.push(
          <div key={"arrCardsCheckBox" + i}>
            <Checkbox onChange={this.onChangeCheckBoxGroup.bind(this, i + 'arrCardsCheckBox')}
                      checked={this.state.cardsChecked[i]}>
              {cards[i]}
            </Checkbox>
          </div>
        )
      }
    } else {
      arrCardsCheckBox.push(
        <div key={"arrCardsCheckBox"}>
          <Checkbox onChange={this.onChangeCheckBoxGroup.bind(this, 'arrCardsCheckBox')}
                    checked={this.state.cardsChecked[0]}>
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