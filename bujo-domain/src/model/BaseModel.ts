import * as moment from 'moment';

export abstract class BaseModel {
    private _id: any = null;
    private _dateCreated: Date = null;
    private _lastUpdated: Date = null;
    private _isDeleted: Boolean = false;
    private _deletedDate: Date = null;

    constructor() {
    }

    markDeleted() {
        this._isDeleted = true;
        this._deletedDate = new Date();
    }

    get id(): any {
        return this._id;
    }

    set id(value: any) {
        if (this._id) {
            throw 'ID cannot be re-set';
        }

        this._id = value;
    }

    get dateCreated(): Date {
        return this._dateCreated;
    }

    set dateCreated(value: Date) {
        if (!!this._dateCreated) {
            throw new Error('Cannot alter a creation date');
        }

        this._dateCreated = value;
    }

    get lastUpdated(): Date {
        return this._lastUpdated;
    }

    set lastUpdated(value: Date) {
        if (!this._dateCreated) {
            this._dateCreated = value;
        }

        const lastUpdated = moment(value);
        const dateCreated = moment(this._dateCreated);

        if (lastUpdated.isBefore(dateCreated)) {
            throw new Error('Last updated cannot be before creation date');
        }

        this._lastUpdated = value;
    }


    get isDeleted(): Boolean {
        return this._isDeleted;
    }

    set isDeleted(value: Boolean) {
        throw new Error('deleted cannot manually set');
    }

    get deletedDate(): Date {
        return this._deletedDate;
    }

    set deletedDate(value: Date) {
        throw new Error('deleted date cannot manually set');
    }
}