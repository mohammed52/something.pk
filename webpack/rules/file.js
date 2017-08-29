const PATHS = require('../paths');

module.exports = ({limit = 10000} = {}) => ({
  test: /\.(mp3)$/,
  loader: 'file-loader',
  options: {
    limit
  },
  include: [PATHS.app, PATHS.modules]
});

