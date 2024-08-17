class apiError_Handler extends Error {
  constructor(
    StatusCode,
    message = 'Something went wrong',
    errors = [],
    statck = ''
  ) {
    super(message);
    this.StatusCode = StatusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (statck) {
      this.statck = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { apiError_Handler };
