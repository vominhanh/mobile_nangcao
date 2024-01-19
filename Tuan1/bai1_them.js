"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompSysc = require("prompt-sync");
var prompt = prompSysc();
var prompt1 = prompSysc();
var prompt2 = prompSysc();
var a = prompt('a input:');
var b = prompt1('b input:');
var c = prompt2('c input:');
function chuVi(a, b, c) {
    return console.log("dien tich:", a + b + c);
    ;
}
function dienTich(a, b, c) {
    var p = (a + b + c) / 2;
    var S = Math.sqrt((p * (p - a) * (p - b) * (p - c)));
    return console.log("dien tich:", S);
}
function loaiTamGiac(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b)
            console.log('Day la tam giac vuong');
        else if (a == b && b == c)
            console.log('Day la tam giac deu');
        else if (a == b || a == c || b == c)
            console.log('Day la tam giac can');
    }
    else
        console.log('Ba canh a, b, c khong phai la ba canh cua mot tam giac');
}
chuVi(parseInt(a), parseInt(b), parseInt(c));
dienTich(parseInt(a), parseInt(b), parseInt(c));
loaiTamGiac(parseInt(a), parseInt(b), parseInt(c));
