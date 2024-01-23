class Product {

    private _description: string
    public get description(): string {
        return this._description
    }
    public set description(value: string) {
        this._description = value
    }

    private _productID: string
    public get productID(): string {
        return this._productID
    }
    public set productID(value: string) {
        this._productID = value
    }

    private _price: number
    public get price(): number {
        return this._price
    }
    public set price(value: number) {
        this._price = value
    }
    constructor(description?: string, productID?: string, price?: number) {
        if(description!=undefined && productID!=undefined && price!=undefined){
            this._description = description
            this._productID = productID
            this._price = price
        }
    }
    



}
export default Product