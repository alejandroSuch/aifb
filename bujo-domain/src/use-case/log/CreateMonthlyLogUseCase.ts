import {UseCase} from "../UseCase";
import {Command} from "../Command";
import {Observable} from "rxjs/Observable";

import "rxjs/add/observable/throw";
import {Log} from "../../model/Log";
import {LogRepository} from "../../repository/LogRepository";
import {LogFactory} from "../../factory/LogFactory";

export class CreateLogUseCase implements UseCase<Log> {
    constructor(private logRepository: LogRepository) {

    }

    execute(command: Command): Observable<Log> {
        return this.logRepository.create(LogFactory.monthlyLog(command.month, command.year));
    }
}
