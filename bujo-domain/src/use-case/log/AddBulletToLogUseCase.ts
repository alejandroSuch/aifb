import {UseCase} from "../UseCase";
import {Command} from "../Command";
import {Observable} from "rxjs/Observable";

import "rxjs/add/observable/throw";
import {Log} from "../../model/Log";
import {LogRepository} from "../../repository/LogRepository";
import {LogFactory} from "../../factory/LogFactory";
import {Bullet} from "../../model/Bullet";

export class CreateLogUseCase implements UseCase<Log> {
    constructor(private logRepository: LogRepository) {

    }

    execute(command: Command): Observable<Log> {
        const bullet:Bullet = command.bullet;
        const log:Log = command.log;

        log.bullets.append(bullet);
        log.lastUpdated = new Date();

        return this.logRepository.save(log);
    }
}
