"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(name, accountNumber, balance) {
        this.RATE = 0.035;
        this.name = name;
        this.accountNumber = accountNumber;
        if (balance !== undefined) {
            this.balance = balance;
        }
        else {
            this.balance = 50000;
        }
    }
    Account.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    };
    Account.prototype.withdraw = function (amount, fee) {
        if (amount > 0 && amount + fee <= this.balance) {
            this.balance -= (amount + fee);
            return true;
        }
        return false;
    };
    Account.prototype.addInterest = function () {
        var RATE = 0.05;
        this.balance += this.balance * RATE;
    };
    Account.prototype.transfer = function (acc2, amount) {
        if (this.withdraw(amount, 0) && acc2.deposit(amount)) {
            return true;
        }
        return false;
    };
    Account.prototype.toString = function () {
        return "Account Information: Name: ".concat(this.name, ", Account Number: ").concat(this.accountNumber, ", Balance: ").concat(this.formatCurrency(this.balance));
    };
    Account.prototype.formatCurrency = function (amount) {
        return new Intl.NumberFormat('vi-vn', { minimumFractionDigits: 3 }).format(amount) + " VND";
    };
    return Account;
}());
exports.Account = Account;
