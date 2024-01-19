class Vehicle {

    private _chuXe: string
    public get chuXe(): string {
        return this._chuXe
    }
    public set chuXe(value: string) {
        this._chuXe = value
    }

    private _loaiXe: string
    public get loaiXe(): string {
        return this._loaiXe
    }
    public set loaiXe(value: string) {
        this._loaiXe = value
    }

    private _triGiaXe: number
    public get triGiaXe(): number {
        return this._triGiaXe
    }
    public setTriGiaXe(triGiaXe: number){
        if(triGiaXe >= 0){
            this._triGiaXe = triGiaXe;
        }else{
            throw new Error("Tri gia xe phai >= 0")
        }
    }


    private _dungTichXyLanh: number
    public get dungTichXyLanh(): number {
        return this._dungTichXyLanh
    }
    public setDungTichXyLanh(dungTichXyLanh: number){
        if(dungTichXyLanh >= 0){
            this._dungTichXyLanh = dungTichXyLanh;
        }else{
            throw new Error("Dung tich xy lanh >= 0")
        }
    }
    constructor(
        chuXe: string,
        loaiXe: string,
        triGiaXe: number,
        dungTichXyLanh: number
    ) {
        this._chuXe = chuXe
        this._loaiXe = loaiXe
        this._triGiaXe = triGiaXe
        this._dungTichXyLanh = dungTichXyLanh
    }
    public tinhThueXe(){
        if(this._dungTichXyLanh < 100 && this._dungTichXyLanh>= 0){
            return this._triGiaXe * 0.01;
        }else if(this._dungTichXyLanh >= 100 && this._dungTichXyLanh <= 200){
            return this._triGiaXe * 0.03;
        }else{
            return this._triGiaXe * 0.05;
        }
    }


    public toString():string {
        return `Tên chủ xe: ${this._chuXe}, Loại xe: ${this._loaiXe}, Dung tích: ${this._dungTichXyLanh}, Trị giá: ${this._triGiaXe}, Thuế phải nộp: ${this.tinhThueXe()}`;
    }
}
let xe1=new Vehicle('Nguyen Thu Loan','Future',100,35000)
let xe2=new Vehicle('Le Minh Tuan','Forrd',3000,700000)
let xe3=new Vehicle('Nguyen Minh Triet','Landscrap',7000,1000000)
console.log(xe1.toString)


    
