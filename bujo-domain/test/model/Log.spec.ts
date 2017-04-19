import {expect} from "chai";
import {Log} from "../../src/model/Log";


describe('Domain model: Log', () => {
    describe('isMonthly', () => {
        it('is not allowed to be changed', () => {
            const log = new Log(true);

            expect(() => {
                log.isMonthly = false;
            }).to.throw(Error);
        });
    });
});