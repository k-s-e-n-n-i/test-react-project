const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Blocks': path.resolve(__dirname, 'src/blocks/'),
      '@Pages': path.resolve(__dirname, 'src/pages/'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
