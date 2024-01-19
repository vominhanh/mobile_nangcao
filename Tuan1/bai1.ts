class TamGiac {
    private ma:number
    private mb:number
    private mc:number

    public setMa(ma: number) : void{
        this.ma = ma;
    }

    public getMa() : number{
        return this.ma;
    }

    public setMb(mb: number) : void{
        this.mb = mb;
    }

    public getMb() : number{
        return this.mb;
    }

    public setMc(mc: number) : void{
        this.mc = mc;
    }

    public getMc() : number{
        return this.mc;
    }
    public toString():string{
        return `accountNumber: ${this.ma}, name: ${this.mb}, balance: ${this.mc}`
    }

    public tinhChuVi() : number{
        return (this.ma + this.mb + this.mc)
    }

    public dienTich(){
        let p = this.tinhChuVi()/2
        let s = Math.sqrt(p*(p-this.ma)*(p-this.mb)*(p-this.mc))
        return s;
    }
    public loaiTamGiac(){
        if( this.ma<this.mb+this.mc && this.mb<this.ma+this.mc && this.mc<this.ma+this.mb ){
            if( this.ma*this.ma==this.mb*this.mb+this.mc*this.mc
                 || this.mb*this.mb==this.ma*this.ma+this.mc*this.mc
                 || this.mc*this.mc== this.ma*this.ma+this.mb*this.mb)
                console.log('Day la tam giac vuong')
            else if(this.ma==this.mb && this.mb==this.mc)
                console.log('Day la tam giac deu')
            else if(this.ma==this.mb || this.ma==this.mc || this.mb==this.mc)
                console.log('Day la tam giac can')
        }
        else
            console.log('Ba canh a, b, c khong phai la ba canh cua mot tam giac')
    
    }
    
}





