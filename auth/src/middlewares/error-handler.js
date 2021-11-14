"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var custom_error_1 = __importDefault(require("../errors/custom-error"));
var errorHandler = function (error, req, res, 
// eslint-disable-next-line no-unused-vars
next) {
    if (error instanceof custom_error_1.default) {
        res.status(error.statusCode).send({ errors: error.serializeErrors() });
    }
    res.status(400).send({
        message: error.message,
    });
    res.status(400).send({
        message: [{ message: 'Unknown error' }],
    });
};
exports.errorHandler = errorHandler;
