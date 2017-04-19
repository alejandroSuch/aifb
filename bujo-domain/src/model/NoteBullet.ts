import {Bullet} from "./Bullet";
import * as moment from "moment";
import {BulletType} from "./BulletType";

export class NoteBullet extends Bullet {
    constructor() {
        super(BulletType.NOTE);
    }
}