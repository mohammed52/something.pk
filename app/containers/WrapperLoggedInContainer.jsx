import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Navigation from '../containers/Navigation';
import styles from '../css/components/navigation';

const cx = classNames.bind(styles);

const WrapperLoggedInContainer = ({children}) => {

  return (
    <div>
      <Navigation />
      {children}
    </div>
    );
};

WrapperLoggedInContainer.propTypes = {
  // user: PropTypes.object,
  // logOut: PropTypes.func.isRequired
  children: PropTypes.object
};

// function mapStateToProps(state) {
// return {
// user: state.user
// };
// }

export default WrapperLoggedInContainer;