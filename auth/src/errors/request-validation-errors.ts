import { ValidationError } from 'express-validator';
import CustomError from './custom-error';

export class RequestValidationErrors extends CustomError {
  statusCode = 400;

  // eslint-disable-next-line no-unused-vars
  constructor(public errors: ValidationError[]) {
    super('Invalid request params');

    Object.setPrototypeOf(this, RequestValidationErrors.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => ({
      message: err.msg,
      field: err.param,
    }));
  }
}
