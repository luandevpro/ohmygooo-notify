const symbol = require('log-symbols');
const chalk = require('chalk');

module.exports = (options) => {
  const { type, message } = options;

  if (type === 'success') {
    console.log(symbol.success, chalk.green(message));
  }

  if (type === 'info') {
    console.log(symbol.info, chalk.blue(message));
  }

  if (type === 'warning') {
    console.log(symbol.warning, chalk.yellow(message));
  }

  if (type === 'error') {
    console.log(symbol.error, chalk.red(message));
  }
};
