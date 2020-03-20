const plugin = require('tailwindcss/plugin');

// Components

const connectButton = require('./components/connectButton');
const connectModal = require('./components/connectModal');
const walletOption = require('./components/walletOption');

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    ...connectButton(theme),
    ...connectModal(theme),
    ...walletOption(theme),
  });
});
