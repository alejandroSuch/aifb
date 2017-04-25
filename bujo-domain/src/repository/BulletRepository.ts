import {Bullet} from "../model/Bullet";
import {Observable} from "rxjs";
import {Log} from "../model/Log";

export interface BulletRepository {
    get(id: String): Observable<Bullet>;
    findByLog(log:Log):Observable<Bullet[]>;
    save(bullet: Bullet): Observable<Bullet>;
    remove(bullet: Bullet): Observable<Bullet>;
}