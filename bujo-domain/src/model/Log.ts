import {BaseModel} from "./BaseModel";

export class Log extends BaseModel {
    private _name: string = null;
    private _isMonthly: boolean = true;

    constructor(isMonthly:boolean) {
        super();
        this._isMonthly = isMonthly;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get isMonthly(): boolean {
        return this._isMonthly;
    }

    set isMonthly(value: boolean) {
        throw new Error('isMonthly cannot be changed');
    }
}
