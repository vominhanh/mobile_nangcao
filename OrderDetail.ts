import Product from "./Product"

class OrderDetail {

    private _quality: number
    public get quality(): number {
        return this._quality
    }
    public set quality(value: number) {
        this._quality = value
    }

    private _product: Product
    public get product(): Product {
        return this._product
    }
    public set product(value: Product) {
        this._product = value
    }
    constructor(quality: number, product: Product) {
        this._quality = quality
        this._product = product
    }
    public calcTotalPrice():number {
        return this._quality*this._product.price
    }

}
export default OrderDetail