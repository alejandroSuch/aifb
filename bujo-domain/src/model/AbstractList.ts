export abstract class AbstractList<T> implements Iterable<T> {
    private _list: T[] = [];

    append(item: T) {
        this._list = [...this._list, item];
    }

    get list(): T[] {
        throw new Error('List is not accessible');
    }

    set list(value: T[]) {
        throw new Error('List cannot be changed');
    }

    get length() {
        return this._list.length;
    }


    [Symbol.iterator](): Iterator<T> {
        let index = 0;

        return <Iterator<T>>{
            next: (): IteratorResult<T> => {
                const done = index === this._list.length;
                const value = done ? null : this._list[index++];

                return {done, value};
            }
        }
    }
}