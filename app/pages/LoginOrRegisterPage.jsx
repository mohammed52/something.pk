import React, { Component } from 'react';
import Page from '../pages/Page';
import LoginOrRegisterContainer from '../containers/LoginOrRegisterContainer';

class LoginOrRegisterPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Login | somethig.pk';
  };

  pageMeta = () => {
    return [
      {
        name: 'description',
        content: 'Login to the dashboard'
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <LoginOrRegisterContainer {...this.props} />
      </Page>
    );
  }
}

export default LoginOrRegisterPage;
