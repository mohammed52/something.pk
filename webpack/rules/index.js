const image = require('./image');
const javascript = require('./javascript');
const css = require('./css');
const file = require('./file');

module.exports = ({production = false, browser = false} = {}) => (
[
  javascript({
    production,
    browser
  }),
  css({
    production,
    browser
  }),
  image(),
  file()
]
);
