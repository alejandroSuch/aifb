import {LogRepository as ILogRepository} from "../../../src/repository/LogRepository";
import {Observable} from "rxjs/Observable";
import {Log} from "../../../src/model/Log";

export class LogRepository implements ILogRepository {
    findAll(): Observable<Log> {
        return null;
    }

    get(id: string): Observable<Log> {
        return null;
    }

    remove(log: Log): Observable<Log> {
        return null;
    }

    create(log: Log): Observable<Log> {
        return null;
    }

    save(log: Log): Observable<Log> {
        return null;
    }
}