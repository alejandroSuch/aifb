import {expect} from 'chai';
import * as moment from 'moment';
import {SinonFakeTimers, useFakeTimers} from 'sinon';
import {LogFactory} from "../../src/factory/LogFactory";

describe('LogFactory', () => {
    let clock: SinonFakeTimers;

    before(function () {
        clock = useFakeTimers(new Date(2017, 2, 1).getTime());
    });

    after(function () {
        clock.restore();
    });

    describe('montlyLog', () => {
        it('creates a monthly log when no data is given', () => {
            const log = LogFactory.monthlyLog();
            expect(log.name).to.be.equals('201703');
        });

        it('creates a monthly log for current year', () => {
            let log = LogFactory.monthlyLog(3);
            expect(log.name).to.be.equals('201703');

            log = LogFactory.monthlyLog(12);
            expect(log.name).to.be.equals('201712');
        });

        it('creates a monthly log for next year`s january', () => {
            let log = LogFactory.monthlyLog(1);
            expect(log.name).to.be.equals('201801');

            log = LogFactory.monthlyLog(2);
            expect(log.name).to.be.equals('201802');
        });

        it('fails when month is not between 1 and 12', () => {
            expect(() => LogFactory.monthlyLog(0)).to.throw(Error);
            expect(() => LogFactory.monthlyLog(5)).not.to.throw(Error);
            expect(() => LogFactory.monthlyLog(13)).to.throw(Error);
        });

        it('creates a monthly log when month and year are given', () => {
            let log = LogFactory.monthlyLog(1, 2018);
            expect(log.name).to.be.equals('201801');

            log = LogFactory.monthlyLog(2, 2018);
            expect(log.name).to.be.equals('201802');
        });

        it('fails when trying to create a monthly log from the past', () => {
            expect(() => LogFactory.monthlyLog(1, 2017)).to.throw(Error);
        });

        it('fails when trying to create a monthly log more than a year from now', () => {
            expect(() => LogFactory.monthlyLog(4, 2018)).to.throw(Error);
        });
    });

    describe('regularLog', () => {

    });
});