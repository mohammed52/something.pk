import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { getCities } from '../actions/citiesActions';
import { getRestaurants } from '../actions/restaurantsActions';
import { getDeals } from '../actions/dealsActions';
import { getBanks } from '../actions/banksActions';
import HomeComponent from '../components/HomeComponent'

class HomeContainer extends Component {

  componentWillMount() {
    console.log("componentWillMount");
    const getCities = this.props.getCities
    const getRestaurants = this.props.getRestaurants
    const getDeals = this.props.getDeals
    const getBanks = this.props.getBanks
    getCities()
    getRestaurants()
    getDeals()
    getBanks()
  }

  render() {

    // const {newTopic, topics, createTopic, destroyTopic, incrementCount, decrementCount, newComment, comments} = this.props;

    return (
      // <div className={cx('vote')}>
      <div>
        <HomeComponent banks={this.props.banks}
                       cities={this.props.cities}
                       deals={this.props.deals}
                       restaurants={this.props.restaurants} />
      </div>
    );
  }
}

HomeContainer.propTypes = {
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
  getDeals,
  getBanks
})(HomeContainer);
