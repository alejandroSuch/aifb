import {Log} from "./Log";

export class LogList implements Iterable<Log> {
    private _list: Log[] = [];

    append(log: Log) {
        this._list = [...this._list, log];
    }


    get list(): Log[] {
        throw new Error('List is not accessible');
    }

    set list(value: Log[]) {
        throw new Error('List cannot be changed');
    }

    get length() {
        return this._list.length;
    }


    [Symbol.iterator](): Iterator<Log> {
        let index = 0;

        return <Iterator<Log>>{
            next: (): IteratorResult<Log> => {
                const done = index === this._list.length;
                const value = done ? null : this._list[index++];

                return {done, value};
            }
        }
    }
}