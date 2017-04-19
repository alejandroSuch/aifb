import {expect} from "chai";
import * as moment from "moment";
import {TaskBullet} from "../../src/model/TaskBullet";
import {BulletType} from "../../src/model/BulletType";
import {NoteBullet} from "../../src/model/NoteBullet";
import {EventBullet} from "../../src/model/EventBullet";
import {LogList} from "../../src/model/LogList";

describe('Domain model: Bullet.', () => {
    describe('Type', () => {
        it('gets created properly', () => {
            const taskBullet = new TaskBullet();
            expect(taskBullet.type).to.be.equals(BulletType.TASK);

            const eventBullet = new EventBullet();
            expect(eventBullet.type).to.be.equals(BulletType.EVENT);

            const noteBullet = new NoteBullet();
            expect(noteBullet.type).to.be.equals(BulletType.NOTE);
        });

        it('is not allowed to change', () => {
            const bullet = new TaskBullet();

            expect(() => {
                bullet.type = BulletType.NOTE;
            }).to.throw(Error);

            expect(() => {
                bullet.type = BulletType.TASK;
            }).not.to.throw(Error);
        });
    });

    describe('Date created', () => {
        it('is set properly', () => {
            const taskBullet = new TaskBullet();
            const now = moment().toDate();

            expect(taskBullet.dateCreated).to.be.null;
            taskBullet.dateCreated = now;
            expect(taskBullet.dateCreated).not.to.be.null;
            expect(taskBullet.dateCreated).to.be.equals(now);
        });

        it('cannot be changed', () => {
            const taskBullet = new TaskBullet();
            const now = moment().toDate();
            const later = moment().add(1, 'hours').toDate();

            taskBullet.dateCreated = now;
            expect(() => {
                taskBullet.dateCreated = later;
            }).to.throw(Error);
        });

        it('is created when last updated has been set and date created hasn\'t', () => {
            const taskBullet = new TaskBullet();
            const now = moment().toDate();

            taskBullet.lastUpdated = now;

            expect(taskBullet.dateCreated).to.be.equals(taskBullet.lastUpdated);
        });

        it('is not altered when last updated has been set and date created already exists', () => {
            const taskBullet = new TaskBullet();
            const now = moment().toDate();
            const later = moment().add(1, 'hours').toDate();

            taskBullet.dateCreated = now;
            taskBullet.lastUpdated = later;

            expect(taskBullet.dateCreated).not.to.be.equals(taskBullet.lastUpdated);
            expect(taskBullet.dateCreated.getTime()).to.be.lessThan(taskBullet.lastUpdated.getTime());
        });
    });

    describe('Last updated', () => {
        it('cannot be less than date created', () => {
            const taskBullet = new TaskBullet();
            const now = moment().toDate();
            const later = moment().add(1, 'hours').toDate();

            expect(() => {
                taskBullet.dateCreated = later;
                taskBullet.lastUpdated = now;
            }).to.throw(Error);
        });
    });

    describe('Logs', () => {
        it('are not allowed to be changed', () => {
            const taskBullet = new TaskBullet();

            expect(() => {
                taskBullet.logs = new LogList();
            }).to.throw(Error);
        });
    });
});