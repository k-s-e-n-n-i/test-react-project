/*const path = require('path');

module.exports = function override(config, env) {
  return {
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@Blocks': path.resolve(__dirname, 'src/blocks/'),
        '@Pages': path.resolve(__dirname, 'src/pages/'),
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  };
};*/

const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@Blocks': 'src/blocks',
    '@': 'src',
  })(config);
  return config;
};
