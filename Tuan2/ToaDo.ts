class ToaDo {
    private ten: string;
    private x: number;
    private y: number;

    constructor( x: number, y: number) {
        this.x = x
        this.y = y
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getX(): number {
        return this.x;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public getY(): number {
        return this.y;
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`
    }
}
export default ToaDo