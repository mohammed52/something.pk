import React, { Component } from 'react';
import Page from '../pages/Page';
import BanksContainer from '../containers/BanksContainer';

class BanksPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Banks | something.pk';
  };

  pageMeta = () => {
    return [
      {
        name: 'description',
        content: 'add new banks, see existing banks'
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <BanksContainer {...this.props} />
      </Page>
    );
  }
}

export default BanksPage;

