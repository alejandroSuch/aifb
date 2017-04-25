import {Bullet} from "../model/Bullet";
import {TaskBullet} from "../model/TaskBullet";
import {EventBullet} from "../model/EventBullet";
import {NoteBullet} from "../model/NoteBullet";
import {BulletType} from "../model/BulletType";
import {BaseModel} from "../model/BaseModel";

export class BulletFactory {
    public static create(type: number = null): Bullet {
        let result: Bullet = null;

        switch (type) {
            case BulletType.TASK:
                result = new TaskBullet();
                break;
            case BulletType.EVENT:
                result = new EventBullet();
                break;
            case BulletType.NOTE:
                result = new NoteBullet();
                break;
            default:
                throw new Error('Unknown bullet type');
        }

        result.dateCreated = new Date();

        return result;
    }
}