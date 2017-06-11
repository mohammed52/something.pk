const PATHS = require('../paths');

module.exports = ({limit = 10000} = {}) => ({
  test: /\.(ttf|eot|svg|mp3|woff2)$/,
  loader: 'file-loader',
  options: {
    limit
  },
  include: [PATHS.app, PATHS.modules]
});

