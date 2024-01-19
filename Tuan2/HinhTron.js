"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HinhTron = /** @class */ (function () {
    function HinhTron(tam, banKinh) {
        if (tam != undefined && banKinh != undefined) {
            this.tam = tam;
            this.banKinh = banKinh;
        }
    }
    HinhTron.prototype.setTam = function (toaDo) {
        this.tam = toaDo;
    };
    HinhTron.prototype.getTam = function () {
        return this.tam;
    };
    HinhTron.prototype.setBanKinh = function (banKinh) {
        this.banKinh = banKinh;
    };
    HinhTron.prototype.getBanKinh = function () {
        return this.banKinh;
    };
    HinhTron.prototype.tinhChuVi = function () {
        var c = Math.PI * (this.banKinh * 2);
        return c;
    };
    HinhTron.prototype.tinhDienTich = function () {
        var s = Math.PI * Math.pow(this.banKinh, 2);
        return s;
    };
    return HinhTron;
}());
exports.default = HinhTron;
