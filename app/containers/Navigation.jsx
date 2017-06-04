import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import styles from '../css/components/navigation';

const cx = classNames.bind(styles);

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user, logOut} = this.props;

    return (
      <nav className={cx('navigation')}
           role="navigation">
        <Link to="/"
              className={cx('item', 'logo')}
              activeClassName={cx('active')}>
          Ninja Ocean
        </Link>
        {user.authenticated ? (
         <Link onClick={logOut}
               className={cx('item')}
               to="/login">
           Logout
         </Link>
         ) : (
         <Link className={cx('item')}
               to="/login">
           Log in
         </Link>
         )}
        <Link className={cx('item')}
              to="/dashboard">
          Dashboard
        </Link>
        <Link className={cx('item')}
              to="/banks">
          Banks
        </Link>
        <Link className={cx('item')}
              to="/cards">
          Cards
        </Link>
        <Link className={cx('item')}
              to="/cities">
          Cities
        </Link>
        <Link className={cx('item')}
              to="/resturants">
          Restaurants
        </Link>
        <Link className={cx('item')}
              to="/deals">
          Deals
        </Link>
      </nav>
    );
  }
}
// const Navigation = ({user, logOut}) => {
//   return (
//     <nav className={cx('navigation')}
//          role="navigation">
//       <Link to="/"
//             className={cx('item', 'logo')}
//             activeClassName={cx('active')}>
//         Ninja Ocean
//       </Link>
//       {user.authenticated ? (
//        <Link onClick={logOut}
//              className={cx('item')}
//              to="/login">
//          Logout
//        </Link>
//        ) : (
//        <Link className={cx('item')}
//              to="/login">
//          Log in
//        </Link>
//        )}
//       <Link className={cx('item')}
//             to="/dashboard">
//         Dashboard
//       </Link>
//       <Link to="/about"
//             className={cx('item')}
//             activeClassName={cx('active')}>
//         About
//       </Link>
//     </nav>
//   );
// };

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {
  logOut
})(Navigation);
