"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationErrors = void 0;
var custom_error_1 = __importDefault(require("./custom-error"));
var RequestValidationErrors = /** @class */ (function (_super) {
    __extends(RequestValidationErrors, _super);
    // eslint-disable-next-line no-unused-vars
    function RequestValidationErrors(errors) {
        var _this = _super.call(this, 'Invalid request params') || this;
        _this.errors = errors;
        _this.statusCode = 400;
        Object.setPrototypeOf(_this, RequestValidationErrors.prototype);
        return _this;
    }
    RequestValidationErrors.prototype.serializeErrors = function () {
        return this.errors.map(function (err) { return ({
            message: err.msg,
            field: err.param,
        }); });
    };
    return RequestValidationErrors;
}(custom_error_1.default));
exports.RequestValidationErrors = RequestValidationErrors;
