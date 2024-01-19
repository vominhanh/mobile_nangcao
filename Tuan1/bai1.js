var TamGiac = /** @class */ (function () {
    function TamGiac() {
    }
    TamGiac.prototype.setMa = function (ma) {
        this.ma = ma;
    };
    TamGiac.prototype.getMa = function () {
        return this.ma;
    };
    TamGiac.prototype.setMb = function (mb) {
        this.mb = mb;
    };
    TamGiac.prototype.getMb = function () {
        return this.mb;
    };
    TamGiac.prototype.setMc = function (mc) {
        this.mc = mc;
    };
    TamGiac.prototype.getMc = function () {
        return this.mc;
    };
    TamGiac.prototype.toString = function () {
        return "accountNumber: ".concat(this.ma, ", name: ").concat(this.mb, ", balance: ").concat(this.mc);
    };
    TamGiac.prototype.tinhChuVi = function () {
        return (this.ma + this.mb + this.mc);
    };
    TamGiac.prototype.dienTich = function () {
        var p = this.tinhChuVi() / 2;
        var s = Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
        return s;
    };
    TamGiac.prototype.loaiTamGiac = function () {
        if (this.ma < this.mb + this.mc && this.mb < this.ma + this.mc && this.mc < this.ma + this.mb) {
            if (this.ma * this.ma == this.mb * this.mb + this.mc * this.mc
                || this.mb * this.mb == this.ma * this.ma + this.mc * this.mc
                || this.mc * this.mc == this.ma * this.ma + this.mb * this.mb)
                console.log('Day la tam giac vuong');
            else if (this.ma == this.mb && this.mb == this.mc)
                console.log('Day la tam giac deu');
            else if (this.ma == this.mb || this.ma == this.mc || this.mb == this.mc)
                console.log('Day la tam giac can');
        }
        else
            console.log('Ba canh a, b, c khong phai la ba canh cua mot tam giac');
    };
    return TamGiac;
}());
