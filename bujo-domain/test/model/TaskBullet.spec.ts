import {expect} from "chai";
import * as sinon from "sinon";
import {SinonFakeTimers} from "sinon";
import {TaskBullet} from "../../src/model/TaskBullet";


describe('Domain model: TaskBullet.', () => {
    describe('Done date', () => {
        let clock: SinonFakeTimers;

        before(function () {
            clock = sinon.useFakeTimers();
        });

        after(function () {
            clock.restore();
        });

        it('cannot be changed manually', () => {
            const bullet = new TaskBullet();

            expect(function () {
                bullet.doneDate = new Date();
            }).to.throw(Error);
        });

        it('cannot be changed if not undone', () => {
            const bullet = new TaskBullet();

            bullet.markAsDone();
            const doneDateBeforeClockTick = bullet.doneDate;

            clock.tick(2000);

            const doneDateAfterClockTick = bullet.doneDate;
            expect(doneDateBeforeClockTick).to.eq(doneDateAfterClockTick);

        });

        it('goes null date when undone', () => {
            const taskBullet = new TaskBullet();
            taskBullet.markAsDone();
            expect(taskBullet.doneDate).not.to.be.null;
            taskBullet.markAsUndone();
            expect(taskBullet.doneDate).to.be.null;
        });

        it('can be changed when undone', () => {
            const bullet = new TaskBullet();

            bullet.markAsDone();
            const doneDateBeforeClockTick = bullet.doneDate;

            clock.tick(2000);

            bullet.markAsUndone();
            bullet.markAsDone();

            const doneDateAfterClockTick = bullet.doneDate;
            expect(doneDateBeforeClockTick).not.to.equal(doneDateAfterClockTick);
        });
    });
});