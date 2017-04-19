import {BaseModel} from "./BaseModel";
import {BulletType} from "./BulletType";
import {Log} from "./Log";
import {LogList} from "./LogList";

export abstract class Bullet extends BaseModel {
    private _type: BulletType;
    private _title: String;
    private _description: String;
    private _logs:LogList;

    constructor(type: BulletType) {
        super();
        this._type = type;
        this._logs = new LogList();
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


    get logs(): LogList {
        return this._logs;
    }

    set logs(value: LogList) {
        throw new Error('Cannot set log list');
    }
}