import {UseCase} from "../UseCase";
import {Command} from "../Command";
import {Observable} from "rxjs/Observable";

import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import {Log} from "../../model/Log";
import {LogRepository} from "../../repository/LogRepository";
import {BulletRepository} from "../../repository/BulletRepository";
import {Bullet} from "../../model/Bullet";

export class DeleteLogUseCase implements UseCase<void> {
    constructor(private logRepository: LogRepository, private bulletRepository: BulletRepository) {

    }

    execute(command: Command): Observable<void> {
        const log: Log = command.log;

        return this.logRepository
            .get(command.log.id)
            .flatMap((log: Log) => (log.isMonthly ?
                Observable.throw(new Error('Cannot delete monthly logs')) : this.logRepository.remove(log))
            )
            .map((log: Log) => {
                for (let bullet of log.bullets) {
                    this.bulletRepository.remove(bullet);
                }
            });
    }
}
