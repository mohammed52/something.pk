import React, { Component } from 'react';
import Page from '../pages/Page';
import WrapperLoggedInContainer from '../containers/WrapperLoggedInContainer';

class WrapperLoggedInPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'wrapper | somethig.pk';
  };

  pageMeta = () => {
    return [
      {
        name: 'description',
        content: 'wrapper for logged in components'
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        try this again
        <WrapperLoggedInContainer {...this.props} />
      </Page>
    );
  }
}

export default WrapperLoggedInPage;
