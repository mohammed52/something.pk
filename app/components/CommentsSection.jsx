import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TopicTextInput from '../components/TopicTextInput';
import styles from '../css/components/entrybox';

const cx = classNames.bind(styles);

// Takes callback functions from props and passes it down to TopicTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move TopicTextInput up to EntryBox so it's less confusing
const CommentsSection = ({
  // onEntryChange, onEntrySave, topic
}) => {
  return (
    <div>Comments come here</div>
  );
};

CommentsSection.propTypes = {
  // topic: PropTypes.string,
  // onEntryChange: PropTypes.func.isRequired,
  // onEntrySave: PropTypes.func.isRequired
};

export default CommentsSection;
