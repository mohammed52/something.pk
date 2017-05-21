import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// import TopicTextInput from '../components/TopicTextInput';
import styles from '../css/components/entrybox';

const cx = classNames.bind(styles);

const ENTER_KEY_CODE = 13;

export default class CommentsSection extends Component {

  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onSave() {
    const {onEntrySave, value} = this.props;
    onEntrySave(value);
  }

  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.onSave();
    }
  }

  render() {
    return (
      <div>
        Enter Comment Come here
        <br/>
        <input placeholder="write and press enter key"
               onKeyDown={this.onKeyDown} />
        <br/>
        <div>
          All Comments show here
        </div>
      </div>
    );
  }
}

CommentsSection.propTypes = {
  onEntrySave: PropTypes.func.isRequired
};

