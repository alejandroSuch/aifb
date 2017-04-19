import {Bullet} from "./Bullet";
import * as moment from "moment";
import {BulletType} from "./BulletType";

export class EventBullet extends Bullet {
    constructor() {
        super(BulletType.EVENT);
    }
}