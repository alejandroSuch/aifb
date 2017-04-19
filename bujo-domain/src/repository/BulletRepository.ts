import {Bullet} from "../model/Bullet";
import {Observable} from "rxjs";

export interface BulletRepository {
    get(id: String): Observable<Bullet>;
    save(bullet: Bullet): Observable<Bullet>;
}