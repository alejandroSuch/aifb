import {Bullet} from "./Bullet";
import * as moment from "moment";
import {BulletType} from "./BulletType";

export class TaskBullet extends Bullet {
    private _dueDate: Date = null;
    private _doneDate: Date = null;

    constructor() {
        super(BulletType.TASK);
    }

    isDone() {
        return !!this._doneDate;
    }

    markAsDone() {
        if (!this.isDone()) {
            this._doneDate = moment().toDate();
        }
    }

    markAsUndone() {
        this._doneDate = null;
    }

    get dueDate(): Date {
        return this._dueDate;
    }

    set dueDate(value: Date) {
        this._dueDate = value;
    }

    get doneDate(): Date {
        return this._doneDate;
    }

    set doneDate(value: Date) {
        if (value) {
            throw new Error('Cannot change done date');
        }
    }
}