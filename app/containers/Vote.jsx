import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryBox from '../components/EntryBox';
import MainSection from '../components/MainSection';
import Scoreboard from '../components/Scoreboard';
import CommentsSection from '../components/CommentsSection';
import { createTopic, typing, incrementCount, decrementCount, destroyTopic } from '../actions/topics';
import { createComment, destroyComment, typingComment } from '../actions/comments';

import styles from '../css/components/vote';

const cx = classNames.bind(styles);

class Vote extends Component {
  render() {
    const {newTopic, topics, createTopic, destroyTopic, incrementCount, decrementCount, newComment} = this.props;

    return (
      <div className={cx('vote')}>
        <EntryBox topic={newTopic}
                  onEntryChange={this.props.typing}
                  onEntrySave={createTopic} />
        <MainSection topics={topics}
                     onIncrement={incrementCount}
                     onDecrement={decrementCount}
                     onDestroy={destroyTopic} />
        <Scoreboard topics={topics} />
        <CommentsSection onEntrySave={this.props.createComment}
                         onDestroy={destroyComment}
                         onCommentEntryChange={this.props.typingComment}
                         comment={newComment} />
      </div>
    );
  }
}

Vote.propTypes = {
  topics: PropTypes.array.isRequired,
  typing: PropTypes.func.isRequired,
  createTopic: PropTypes.func.isRequired,
  destroyTopic: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  newTopic: PropTypes.string,

  comments: PropTypes.array.isRequired,
  newComment: PropTypes.string,
  createComment: PropTypes.func.isRequired,
  destroyComment: PropTypes.func.isRequired,
  typingComment: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    topics: state.topic.topics,
    newTopic: state.topic.newTopic,
    comments: state.comment.comments,
    newComment: state.comment.newComment
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {
  createTopic,
  typing,
  incrementCount,
  decrementCount,
  destroyTopic,
  createComment,
  destroyComment,
  typingComment
})(Vote);
