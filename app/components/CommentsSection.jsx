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
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onSave() {
    const {onEntrySave, comment} = this.props;
    onEntrySave(value);
  }

  onChange(event) {
    const MAPLOG = true;
    if (MAPLOG) console.log("onChange");
    const {onCommentEntryChange} = this.props;
    onCommentEntryChange(event.target.value);
  }

  onKeyDown(event) {
    const MAPLOG = true;
    if (MAPLOG) console.log("onKeyDown");
    if (event.keyCode === ENTER_KEY_CODE) {
      this.onSave();
    }
  }

  render() {
    const {comment} = this.props;
    return (
      <div>
        Enter Comment Come here
        <br/>
        <input placeholder="write a comment..."
               onKeyDown={this.onKeyDown}
               onChange={this.onChange}
               value={comment}
               autoFocus/>
        <br/>
        <div>
          All Comments show here
        </div>
      </div>
    );
  }
}

CommentsSection.propTypes = {
  onEntrySave: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  onCommentEntryChange: PropTypes.func.isRequired
};

