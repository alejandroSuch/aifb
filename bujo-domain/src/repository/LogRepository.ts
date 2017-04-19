import {Observable} from "rxjs/Observable";
import {Log} from "../model/Log";

export interface LogRepository {
    findAll():Observable<Log>;
    create(log:Log):Observable<Log>;
}