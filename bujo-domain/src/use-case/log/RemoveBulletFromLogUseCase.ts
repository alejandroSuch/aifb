import {UseCase} from "../UseCase";
import {Command} from "../Command";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import {Log} from "../../model/Log";
import {LogRepository} from "../../repository/LogRepository";
import {BulletRepository} from "../../repository/BulletRepository";
import {Bullet} from "../../model/Bullet";

export class RemoveBulletFromLogUseCase implements UseCase<Log> {
    constructor(private logRepository: LogRepository, private bulletRepository: BulletRepository) {

    }

    execute(command: Command): Observable<Log> {
        const log: Log = command.log;
        const bullet: Bullet = command.bullet;

        log.bullets.remove(bullet);

        return this.logRepository
            .save(log)
            .map(log => this.bulletRepository.remove(bullet))
            .map(() => log);
    }
}
