import {expect} from 'chai';
import {Log} from "../../src/model/Log";
import {LogList} from "../../src/model/LogList";

describe('Domain model: LogList', () => {
    const aMonthlyLog = new Log(true);
    const anotherMonthlyLog = new Log(true);
    const aNonMonthlyLog = new Log(false);

    it('cannot be accessed', () => {
        const aLogList = new LogList();
        aLogList.append(aMonthlyLog);
        aLogList.append(anotherMonthlyLog);
        aLogList.append(aNonMonthlyLog);

        expect(() => aLogList.list).to.throw(Error);
    });

    it('returns a proper length', () => {
        const aLogList = new LogList();
        expect(aLogList.length).to.be.equals(0);

        aLogList.append(aMonthlyLog);
        expect(aLogList.length).to.be.equals(1);

        aLogList.append(anotherMonthlyLog);
        expect(aLogList.length).to.be.equals(2);

        aLogList.append(aNonMonthlyLog);
        expect(aLogList.length).to.be.equals(3);
    });

    it('can be iterated', () => {
        const aLogList = new LogList();
        aLogList.append(aMonthlyLog);
        aLogList.append(anotherMonthlyLog);
        aLogList.append(aNonMonthlyLog);

        for (let log of aLogList) {
            expect(log).to.be.instanceof(Log);
            expect(log).not.to.be.null;
        }
    });
});