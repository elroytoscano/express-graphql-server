const { StatusCodes } = require('http-status-codes')

const ErrorTypes = {
  DUPLICATE_EMAIL: {
    message: 'Email already exists',
    statusCode: StatusCodes.BAD_REQUEST,
  },
  NOT_FOUND: {
    message: 'Resource does not exist',
    statusCode: StatusCodes.NOT_FOUND,
  },
  UNAUTHENTICATED: {
    message: 'Invalid credentials',
    statusCode: StatusCodes.UNAUTHORIZED,
  },
  UNAUTHORIZED: {
    message: 'You are not allowed to view the resource',
    statusCode: StatusCodes.FORBIDDEN,
  },
  SERVER_ERROR: {
    message: 'Internal Server Error',
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  },
  BAD_REQUEST: {
    message: 'Bad Request Error',
    statusCode: StatusCodes.BAD_REQUEST,
  },
}

module.exports = ErrorTypes
