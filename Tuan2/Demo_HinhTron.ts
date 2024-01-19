import ToaDo from "./ToaDo";
import HinhTron from "./HinhTron";
import* as promptSync from 'prompt-sync'

const prompt = promptSync();

function demo():void{
    let x = prompt("Nhap  x: ")
    let y = prompt("Nhap  y: ")

    let toado =  new ToaDo(parseFloat(x),parseFloat (y))

    console.log(toado.toString())
    
    let bankinh = prompt("Nhap ban kinh hinh tron: ")
    let hinhTron = new HinhTron(toado, parseFloat(bankinh) )
    console.log(`Hình tròn có tâm : ${hinhTron.getTam().toString()} 
                Hình tròn có bán kính : ${hinhTron.getBanKinh()} 
                Hình tròn có diện tích : ${hinhTron.tinhDienTich()} 
                Hình tròn có chu vi : ${hinhTron.tinhChuVi()}`)
}
demo()

