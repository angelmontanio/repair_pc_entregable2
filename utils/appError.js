//Extendemos clase error para entre otras cosas,
//para que next lo detecte como un error
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'error' : 'fail';

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {AppError}