"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToaDo_1 = require("./ToaDo");
var HinhTron_1 = require("./HinhTron");
var promptSync = require("prompt-sync");
var prompt = promptSync();
function demo() {
    var x = prompt("Nhap  x: ");
    var y = prompt("Nhap  y: ");
    var toado = new ToaDo_1.default(parseFloat(x), parseFloat(y));
    console.log(toado.toString());
    var bankinh = prompt("Nhap ban kinh hinh tron: ");
    var hinhTron = new HinhTron_1.default(toado, parseFloat(bankinh));
    console.log("H\u00ECnh tr\u00F2n c\u00F3 t\u00E2m : ".concat(hinhTron.getTam().toString(), " \n                H\u00ECnh tr\u00F2n c\u00F3 b\u00E1n k\u00EDnh : ").concat(hinhTron.getBanKinh(), " \n                H\u00ECnh tr\u00F2n c\u00F3 di\u1EC7n t\u00EDch : ").concat(hinhTron.tinhDienTich(), " \n                H\u00ECnh tr\u00F2n c\u00F3 chu vi : ").concat(hinhTron.tinhChuVi()));
}
demo();
