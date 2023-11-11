const { initPlugin } = require('cypress-plugin-snapshots/plugin');
const wp = require('@cypress/webpack-preprocessor');

module.exports = (on: any, config: any) => {
  // Inicializa el complemento para snapshots
  initPlugin(on, config);

  // Agrega el preprocesador de Webpack
  on('file:preprocessor', wp({ webpackOptions: require('../webpack.config.js') }));

  // Resto de la configuración...

  return config;
};
