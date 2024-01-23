import OrderDetail from "./OrderDetail"
import Product from "./Product"

class Order {

    private _orderID: number
    public get orderID(): number {
        return this._orderID
    }
    public set orderID(value: number) {
        this._orderID = value
    }

    private _orderDate: Date
    public get orderDate(): Date {
        return this._orderDate
    }
    public set orderDate(value: Date) {
        this._orderDate = value
    }



    private _lineItems: OrderDetail[] = []
    public get lineItems(): OrderDetail[] {
        return this._lineItems
    }
    public set lineItems(value: OrderDetail[]) {
        this._lineItems = value
    }


    private _count: number
    public get count(): number {
        return this._count
    }
    public set count(value: number) {
        this._count = value
    }
    constructor(orderID: number, orderDate: Date, count?: number) {
        this._orderID = orderID
        this._orderDate = orderDate
        if (count!=undefined){
            this._count = count
        }
        
    }
    public addLineItem(p: Product, x: number) {
        this._lineItems.push(new OrderDetail(x,p))
    }


}
export default Order