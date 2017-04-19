import {BaseModel} from "./BaseModel";
import {BulletList} from "./BulletList";

export class Log extends BaseModel {
    private _name: string = null;
    private _isMonthly: boolean = true;
    private _bullets: BulletList;

    constructor(isMonthly: boolean) {
        super();
        this._isMonthly = isMonthly;
        this._bullets = new BulletList();
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


    get bullets(): BulletList {
        return this._bullets;
    }

    set bullets(value: BulletList) {
        throw new Error('Bullets cannot be changed');
    }
}
