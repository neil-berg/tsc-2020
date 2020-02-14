"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var _a = dateString
        .split('/')
        .map(function (value) { return parseInt(value); }), day = _a[0], month = _a[1], year = _a[2];
    return new Date(year, month - 1, day);
};
