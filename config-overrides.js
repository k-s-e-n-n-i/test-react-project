/*const path = require('path');

module.exports = function override(config, env) {
  return {
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@Components': path.resolve(__dirname, 'src/components/'),
        '@Pages': path.resolve(__dirname, 'src/pages/'),
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  };
};*/

const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@Components': 'src/components',
    '@': 'src',
  })(config);
  return config;
};
