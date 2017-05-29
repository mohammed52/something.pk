import React, { Component } from 'react';
import Page from '../pages/Page';
import ShowDiscountsContainer from '../containers/ShowDiscountsContainer';

class ShowDiscountsPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Food Discounts';
  };

  pageMeta = () => {
    return [
      {
        name: 'description',
        content: 'Best foods discounts and deals on bank cards in Pakistan'
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <ShowDiscountsContainer {...this.props} />
      </Page>
    );
  }
}

export default ShowDiscountsPage;

