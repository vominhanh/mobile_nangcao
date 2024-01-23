class noiThanh {

    private _maChuyen: string
    public get maChuyen(): string {
        return this._maChuyen
    }
    public set maChuyen(value: string) {
        this._maChuyen = value
    }

    private _hoTenTX: string
    public get hoTenTX(): string {
        return this._hoTenTX
    }
    public set hoTenTX(value: string) {
        this._hoTenTX = value
    }

    private _soXe: string
    public get soXe(): string {
        return this._soXe
    }
    public set soXe(value: string) {
        this._soXe = value
    }

    private _soTuyen: number
    public get soTuyen(): number {
        return this._soTuyen
    }
    public set soTuyen(value: number) {
        this._soTuyen = value
    }

    private _sokmDiDuoc: number
    public get sokmDiDuoc(): number {
        return this._sokmDiDuoc
    }
    public set sokmDiDuoc(value: number) {
        this._sokmDiDuoc = value
    }

    private _doanhThu: number
    public get doanhThu(): number {
        return this._doanhThu
    }
    public set doanhThu(value: number) {
        this._doanhThu = value
    }
    constructor(
        maChuyen: string,
        hoTenTX: string,
        soXe: string,
        soTuyen: number,
        sokmDiDuoc: number,
        doanhThu: number
    ) {
        this._maChuyen = maChuyen
        this._hoTenTX = hoTenTX
        this._soXe = soXe
        this._soTuyen = soTuyen
        this._sokmDiDuoc = sokmDiDuoc
        this._doanhThu = doanhThu
    }

}
export default noiThanh