import React, { Component } from 'react';
import Page from '../pages/Page';
import CardsContainer from '../containers/CardsContainer';

class CardsPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Cards | something.pk';
  };

  pageMeta = () => {
    return [
      {
        name: 'description',
        content: 'add new cards, see existing cards'
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <CardsContainer {...this.props} />
      </Page>
      );
  }
}

export default CardsPage;

