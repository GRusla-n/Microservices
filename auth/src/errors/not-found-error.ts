import CustomError from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Route not found log');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  // eslint-disable-next-line
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: 'Rout not found' }];
  }
}
