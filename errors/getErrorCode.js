const ErrorTypes = require('./ErrorTypes')

const getErrorCode = (errorName) => ErrorTypes[errorName]

module.exports = getErrorCode
