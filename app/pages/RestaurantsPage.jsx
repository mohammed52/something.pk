import React, { Component } from 'react';
import Page from '../pages/Page';
import RestaurantsContainer from '../containers/RestaurantsContainer';

class RestaurantsPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Restaurants | something.pk';
  };

  pageMeta = () => {
    return [
      {
        name: 'description',
        content: 'add new Restaurants, see existing Restaurants'
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <RestaurantsContainer {...this.props} />
      </Page>
    );
  }
}

export default RestaurantsPage;

