"use strict";
exports.__esModule = true;
function beQueryString(obj, prefix) {
    if (prefix === void 0) { prefix = '?'; }
    return Object.keys(obj).reduce(function (prev, cur, index) {
        var connector = '';
        if (index !== 0) {
            connector = '&';
        }
        return "" + prev + connector + cur + "=" + obj[cur];
    }, prefix);
}
exports["default"] = beQueryString;
