"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToaDo = /** @class */ (function () {
    function ToaDo(x, y) {
        this.x = x;
        this.y = y;
    }
    ToaDo.prototype.setX = function (x) {
        this.x = x;
    };
    ToaDo.prototype.getX = function () {
        return this.x;
    };
    ToaDo.prototype.setY = function (y) {
        this.y = y;
    };
    ToaDo.prototype.getY = function () {
        return this.y;
    };
    ToaDo.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    return ToaDo;
}());
exports.default = ToaDo;
