import {Observable} from "rxjs/Observable";
import {Log} from "../model/Log";

export interface LogRepository {
    findAll():Observable<Log>;
    get(id:string):Observable<Log>;
    remove(log:Log):Observable<Log>
    create(log:Log):Observable<Log>;
    save(log:Log):Observable<Log>;
}