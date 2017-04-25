import * as moment from "moment";
import {Log} from "../model/Log";
const pad = require("pad-left");

export class LogFactory {
    public static regularLog(name:string):Log {
        const log = new Log(false);

        log.name = name;

        return log;
    }

    public static monthlyLog(month: number = moment().month() + 1,
                             year: number = (moment().year() + (month < (moment().month() + 1) ? 1 : 0))): Log {
        const dayOne = moment({day: 1});

        if (month < 1 || month > 12) {
            throw new Error('invalid month');
        }

        const log = new Log(true);
        log.name = `${year}${pad(month, 2, '0')}`;

        if (parseInt(dayOne.format('YYYYMM')) > parseInt(log.name)) {
            throw new Error('cannot create past monthly logs');
        }


        const logMonth = moment({year, month: month - 1});
        if (Math.abs(dayOne.diff(logMonth, 'months')) > 12) {
            throw new Error('cannot create monthly logs that far in time');
        }

        return log;
    }
}