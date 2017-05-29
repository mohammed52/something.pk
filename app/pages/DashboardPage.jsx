import React, { Component } from 'react';
import Page from '../pages/Page';
import DashboardContainer from '../containers/DashboardContainer';

class DashboardPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Dashboard | something.pk';
  };

  pageMeta = () => {
    return [
      {
        name: 'description',
        content: 'create banks, cards, restaurants, cities, deals and discounts'
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <DashboardContainer {...this.props} />
      </Page>
    );
  }
}

export default DashboardPage;

