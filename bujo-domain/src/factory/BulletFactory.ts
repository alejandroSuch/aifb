import {Bullet} from "../model/Bullet";
import {TaskBullet} from "../model/TaskBullet";
import {EventBullet} from "../model/EventBullet";
import {NoteBullet} from "../model/NoteBullet";
import {BulletType} from "../model/BulletType";

export class BulletFactory {
    public static create(type: number = null): Bullet {
        if (!type) {
            return null;
        }

        let result: Bullet = null;

        if (type === BulletType.TASK) {
            result = new TaskBullet();
        } else if (type === BulletType.EVENT) {
            result = new EventBullet();
        } else if (type === BulletType.NOTE) {
            result = new NoteBullet();
        }

        result.dateCreated = new Date();

        return result;
    }
}