import {BulletRepository} from "../../repository/BulletRepository";
import {TaskBullet} from "../../model/TaskBullet";
import {UseCase} from "../UseCase";
import {Command} from "../Command";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/observable/throw';

export class MarkBulletAsDoneUseCase implements UseCase<TaskBullet> {
    constructor(private bulletRepository: BulletRepository) {

    }

    execute(command: Command): Observable<TaskBullet> {
        const bullet: TaskBullet = command.bullet;

        if (!(bullet instanceof TaskBullet)) {
            return Observable.throw(new Error('bullet is not instance of taskbullet'))
        }

        bullet.markAsDone();
        bullet.lastUpdated = new Date();
        return this.bulletRepository.save(bullet);
    }
}
