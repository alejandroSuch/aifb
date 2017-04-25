import {BulletRepository as IBulletRepository} from "../../../src/repository/BulletRepository";
import {Observable} from "rxjs/Observable";
import {Bullet} from "../../../src/model/Bullet";
import {Log} from "../../../src/model/Log";

export class BulletRepository implements IBulletRepository {
    get(id: String): Observable<Bullet> {
        return null;
    }

    findByLog(log: Log): Observable<Bullet[]> {
        return null;
    }

    save(bullet: Bullet): Observable<Bullet> {
        return null;
    }

    remove(bullet: Bullet): Observable<Bullet> {
        return null;
    }

}