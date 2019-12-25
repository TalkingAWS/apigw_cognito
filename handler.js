'use strict';

module.exports.public = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'PUBLIC.',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.secure = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'SECURE',
        input: event,
      },
      null,
      2
    ),
  };
};