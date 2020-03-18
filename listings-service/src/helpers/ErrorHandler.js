class ErrorHandler extends Error {
  constructor(message, status = 400) {
    super();
    this.status = status;
    this.message = message;
  }
}

export default ErrorHandler;
