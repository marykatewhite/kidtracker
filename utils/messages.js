const moment = require('moment');

function formatMessage(username, text, toUser) {
  return {
    username,
    text,
    toUser,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;