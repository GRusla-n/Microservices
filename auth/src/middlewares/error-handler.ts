import {NextFunction, Response, Request} from "express";
import {CustomError} from "../errors/custom-error";

export const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if (error instanceof CustomError) {
        res.status(error.statusCode).send({errors: error.serializeErrors()})
    }

    res.status(400).send({
        message: error.message
    })

    res.status(400).send({
        message: [{message: 'Unknown error'}]
    })
}
