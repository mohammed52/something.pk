import React, { Component } from 'react';
import Page from '../pages/Page';
import DealsContainer from '../containers/DealsContainer';

class DealsPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Deals | something.pk';
  };

  pageMeta = () => {
    return [
      {
        name: 'description',
        content: 'add new deals, see existing deals'
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <DealsContainer {...this.props} />
      </Page>
    );
  }
}

export default DealsPage;

