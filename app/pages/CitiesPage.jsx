import React, { Component } from 'react';
import Page from '../pages/Page';
import CitiesContainer from '../containers/CitiesContainer';

class CitiesPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Cities | something.pk';
  };

  pageMeta = () => {
    return [
      {
        name: 'description',
        content: 'add new cities, see existing cities'
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <CitiesContainer {...this.props} />
      </Page>
    );
  }
}

export default CitiesPage;

