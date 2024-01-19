import ToaDo from "./ToaDo";
class HinhTron {
    private tam: ToaDo;
    private banKinh: number;


    constructor(tam?: ToaDo, banKinh?: number) {
        if(tam!=undefined && banKinh!=undefined){
            this.tam = tam
            this.banKinh = banKinh
            }
    }

    public setTam(toaDo: ToaDo): void {
        this.tam = toaDo;
    }

    public getTam(): ToaDo {
        return this.tam;
    }

    public setBanKinh(banKinh: number): void {
        this.banKinh = banKinh;
    }

    public getBanKinh(): number {
        return this.banKinh;
    }

    public tinhChuVi(): number {
        let c = Math.PI * (this.banKinh * 2);
        return c;
    }

    public tinhDienTich(): number {
        let s = Math.PI * Math.pow(this.banKinh, 2);
        return s;
    }
}
export default HinhTron