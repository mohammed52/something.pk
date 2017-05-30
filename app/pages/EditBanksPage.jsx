import React, { Component } from 'react';
import Page from '../pages/Page';
import EditBanksContainer from '../containers/EditBanksContainer';

class EditsBanksPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Edit Banks | something.pk';
  };

  pageMeta = () => {
    return [
      {
        name: 'description',
        content: 'create edit banks'
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <EditBanksContainer {...this.props} />
      </Page>
    );
  }
}

export default EditsBanksPage;

