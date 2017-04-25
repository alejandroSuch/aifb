import {UseCase} from "../UseCase";
import {Command} from "../Command";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/zip";
import {Log} from "../../model/Log";
import {LogRepository} from "../../repository/LogRepository";
import {BulletRepository} from "../../repository/BulletRepository";

export class RemoveBulletFromLogUseCase implements UseCase<Log> {
    constructor(private logRepository: LogRepository, private bulletRepository: BulletRepository) {

    }

    execute(command: Command): Observable<Log> {
        const aLog = new Log(false);
        aLog.id = command.id;

        const log$ = this.logRepository.get(command.id);
        const bullets$ = this.bulletRepository.findByLog(aLog);

        return Observable.zip(
            log$, bullets$,
            (log, bullets) => {
                bullets.forEach(log.bullets.append);
                return log;
            }
        );
    }
}
