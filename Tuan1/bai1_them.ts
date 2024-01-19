import * as prompSysc from 'prompt-sync'
const prompt =prompSysc();
const prompt1 =prompSysc();
const prompt2 =prompSysc();
let a=prompt('a input:');
let b=prompt1('b input:');
let c=prompt2('c input:');


function chuVi(a:number,b:number,c:number){
    return console.log(`dien tich:`,a+b+c);;
}
function dienTich(a:number,b:number,c:number){
    let p = (a + b + c)/2
    let S = Math.sqrt( (p * (p-a) * (p-b) * (p-c)))
    return console.log(`dien tich:`,S);
}
function loaiTamGiac(a:number, b:number,c:number){
    if( a<b+c && b<a+c && c<a+b ){
		if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b)
			console.log('Day la tam giac vuong')
		else if(a==b && b==c)
			console.log('Day la tam giac deu')
		else if(a==b || a==c || b==c)
			console.log('Day la tam giac can')
	}
	else
		console.log('Ba canh a, b, c khong phai la ba canh cua mot tam giac')

}

chuVi(parseInt(a),parseInt(b),parseInt(c))
dienTich(parseInt(a),parseInt(b),parseInt(c))
loaiTamGiac(parseInt(a),parseInt(b),parseInt(c))


