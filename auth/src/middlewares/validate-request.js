"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
var express_validator_1 = require("express-validator");
var request_validation_errors_1 = require("../errors/request-validation-errors");
var validateRequest = function (req, res, next) {
    var errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        throw new request_validation_errors_1.RequestValidationErrors(errors.array());
    }
    next();
};
exports.validateRequest = validateRequest;
