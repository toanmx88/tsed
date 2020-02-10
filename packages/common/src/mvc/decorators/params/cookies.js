"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParamTypes_1 = require("../../models/ParamTypes");
const useFilter_1 = require("./useFilter");
const mapParamsOptions_1 = require("../utils/mapParamsOptions");
function CookiesParams(...args) {
    const { expression, useType, useConverter = false, useValidation = false } = mapParamsOptions_1.mapParamsOptions(args);
    return useFilter_1.UseFilter(ParamTypes_1.ParamTypes.COOKIES, {
        expression,
        useType,
        useConverter,
        useValidation
    });
}
exports.CookiesParams = CookiesParams;
function Cookies(...args) {
    // @ts-ignore
    return CookiesParams(...args);
}
exports.Cookies = Cookies;
//# sourceMappingURL=cookies.js.map