export class Account {
    private accountNumber: number;
    private name: string;
    private balance: number;
    private RATE :number=0.035


    constructor(name: string, accountNumber: number, balance?: number) {
        this.name = name;
        this.accountNumber = accountNumber ;
        if (balance !== undefined) {
            this.balance = balance;
        } else {
            this.balance = 50000;
        }
    }

    public getAccountNumber(): number {
        return this.accountNumber;
    }

    public getName(): string {
        return this.name;
    }

    public deposit(amount: number): boolean {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }

    public withdraw(amount: number, fee: number): boolean {
        if (amount > 0 && amount + fee <= this.balance) {
            this.balance -= (amount + fee);
            return true;
        }
        return false;
    }

    public addInterest(): void {
        const RATE = 0.05;
        this.balance += this.balance * RATE;
    }

    public transfer(acc2: Account, amount: number): boolean {
        if (this.withdraw(amount, 0) && acc2.deposit(amount)) {
            return true;
        }
        return false;
    }

    public toString(): string {
        return `Account Information: Name: ${this.name}, Account Number: ${this.accountNumber}, Balance: ${this.formatCurrency(this.balance)}`;
    }

    
    private formatCurrency(amount: number): string {
        return new Intl.NumberFormat('vi-vn', {minimumFractionDigits: 3}).format(amount) + " VND"
    }
}