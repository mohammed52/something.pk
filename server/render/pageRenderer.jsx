import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import staticAssets from './static-assets';
import { CookiesProvider } from 'react-cookie';

const createApp = (store, props, req) => renderToString(
  <CookiesProvider cookies={req.universalCookies}>
    <Provider store={store}>
      <RouterContext {...props} />
    </Provider>
  </CookiesProvider>
);

const buildPage = ({componentHTML, initialState, headAssets}) => {
  return `
<!doctype html>
<html>
  <head>
    ${headAssets.title.toString()}
    ${headAssets.meta.toString()}
    ${headAssets.link.toString()}
    ${staticAssets.createStylesheets()}
    ${staticAssets.createTrackingScript()}
  </head>
  <body>
    <div id="app">${componentHTML}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    ${staticAssets.createAppScript()}
  </body>
</html>`;
};

export default (store, props, req) => {
  // console.log("req", req);
  const initialState = store.getState();
  const componentHTML = createApp(store, props, req);
  const headAssets = Helmet.renderStatic();
  return buildPage({
    componentHTML,
    initialState,
    headAssets
  });
};

