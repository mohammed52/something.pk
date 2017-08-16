import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { getCities } from '../actions/citiesActions';
import { getRestaurants } from '../actions/restaurantsActions';
import { getDeals } from '../actions/dealsActions';
import DiscountsComponent from '../components/DiscountsComponent'
import styles from '../css/components/vote';

const cx = classNames.bind(styles);

class ShowDiscountsContainer extends Component {

  componentWillMount() {
    console.log("componentWillMount");
    const getCities = this.props.getCities
    const getRestaurants = this.props.getRestaurants
    const getDeals = this.props.getDeals
    getCities()
    getRestaurants()
    getDeals()
  }

  render() {

    // const {newTopic, topics, createTopic, destroyTopic, incrementCount, decrementCount, newComment, comments} = this.props;

    return (
      // <div className={cx('vote')}>
      <div>
        ShowDiscountsContainer
        <DiscountsComponent banks={this.props.banks}
                            cities={this.props.cities}
                            deals={this.props.deals}
                            restaurants={this.props.restaurants} />
      </div>
    );
  }
}

ShowDiscountsContainer.propTypes = {
  banks: PropTypes.array.isRequired,
  deals: PropTypes.array.isRequired,
  restaurants: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,

  getRestaurants: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired,
  getDeals: PropTypes.func.isRequired

};

function mapStateToProps(state) {
  return {
    cities: state.city.cities,
    banks: state.bank.banks,
    restaurants: state.restaurant.restaurants,
    deals: state.deal.deals,

  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {
  getRestaurants,
  getCities,
  getDeals
})(ShowDiscountsContainer);
