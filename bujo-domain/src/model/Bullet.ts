import {BaseModel} from "./BaseModel";
import {BulletType} from "./BulletType";

export abstract class Bullet extends BaseModel {
    private _type: BulletType;
    private _title: String;
    private _description: String;

    constructor(type: BulletType) {
        super();
        this._type = type;
    }

    get type(): BulletType {
        return this._type;
    }

    set type(value: BulletType) {
        if (this._type !== value) {
            throw new Error('Cannot change done bullet type');
        }
    }

    get title(): String {
        return this._title;
    }

    set title(value: String) {
        this._title = value;
    }

    get description(): String {
        return this._description;
    }

    set description(value: String) {
        this._description = value;
    }
}