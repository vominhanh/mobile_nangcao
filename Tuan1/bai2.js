var Vehicle = /** @class */ (function () {
    function Vehicle(chuXe, loaiXe, triGiaXe, dungTichXyLanh) {
        this._chuXe = chuXe;
        this._loaiXe = loaiXe;
        this._triGiaXe = triGiaXe;
        this._dungTichXyLanh = dungTichXyLanh;
    }
    Object.defineProperty(Vehicle.prototype, "chuXe", {
        get: function () {
            return this._chuXe;
        },
        set: function (value) {
            this._chuXe = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "loaiXe", {
        get: function () {
            return this._loaiXe;
        },
        set: function (value) {
            this._loaiXe = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "triGiaXe", {
        get: function () {
            return this._triGiaXe;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.setTriGiaXe = function (triGiaXe) {
        if (triGiaXe >= 0) {
            this._triGiaXe = triGiaXe;
        }
        else {
            throw new Error("Tri gia xe phai >= 0");
        }
    };
    Object.defineProperty(Vehicle.prototype, "dungTichXyLanh", {
        get: function () {
            return this._dungTichXyLanh;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.setDungTichXyLanh = function (dungTichXyLanh) {
        if (dungTichXyLanh >= 0) {
            this._dungTichXyLanh = dungTichXyLanh;
        }
        else {
            throw new Error("Dung tich xy lanh >= 0");
        }
    };
    Vehicle.prototype.tinhThueXe = function () {
        if (this._dungTichXyLanh < 100 && this._dungTichXyLanh >= 0) {
            return this._triGiaXe * 0.01;
        }
        else if (this._dungTichXyLanh >= 100 && this._dungTichXyLanh <= 200) {
            return this._triGiaXe * 0.03;
        }
        else {
            return this._triGiaXe * 0.05;
        }
    };
    Vehicle.prototype.toString = function () {
        return "Tên chủ xe: ${this._chuXe}, Loại xe: ${this._loaiXe}, Dung tích: ${this._dungTichXyLanh}, Trị giá: ${this._triGiaXe}, Thuế phải nộp: ${this.tinhThueXe()}";
    };
    return Vehicle;
}());
var xe1 = new Vehicle('Nguyen Thu Loan', 'Future', 100, 35000);
var xe2 = new Vehicle('Le Minh Tuan', 'Forrd', 3000, 700000);
var xe3 = new Vehicle('Nguyen Minh Triet', 'Landscrap', 7000, 1000000);
console.log(xe1.toString);
