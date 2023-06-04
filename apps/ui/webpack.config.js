const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
//const Dotenv = require('dotenv-webpack');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  // config.plugins.push(
  //   new Dotenv({
  //     path: './.env', // load this now instead of the ones in '.env'
  //     safe: false, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
  //     systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
  //     silent: false, // hide any errors
  //     defaults: false, // load '.env.defaults' as the default values if empty.
  //   })
  // );
  return config;
});
