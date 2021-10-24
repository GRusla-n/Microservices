import {ValidationError} from 'express-validator'
import {CustomError} from "./custom-error";


export class RequestValidationErrors extends CustomError {
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        super('Invalid request params');

        Object.setPrototypeOf(this, RequestValidationErrors.prototype)
    }

    serializeErrors() {
        return this.errors.map(err => {
            return {message: err.msg, field: err.param}
        })
    }
}
