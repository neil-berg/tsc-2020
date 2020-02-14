"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var _this = this;
        var wins = 0;
        matches.forEach(function (row) {
            if (row[1] === _this.team && row[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (row[2] === _this.team && row[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        });
        return "Team " + this.team + " has won " + wins + " times";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
