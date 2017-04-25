import {expect} from 'chai';

import {BulletFactory} from "../../src/factory/BulletFactory";
import {BulletType} from "../../src/model/BulletType";
import {NoteBullet} from "../../src/model/NoteBullet";
import {EventBullet} from "../../src/model/EventBullet";
import {TaskBullet} from "../../src/model/TaskBullet";

describe('BulletFactory', () => {

    it('creates a note bullet', () => {
        let instance = BulletFactory.create(BulletType.NOTE);
        expect(instance).to.be.instanceOf(NoteBullet);
    });

    it('creates an event bullet', () => {
        let instance = BulletFactory.create(BulletType.EVENT);
        expect(instance).to.be.instanceOf(EventBullet);
    });

    it('creates a task bullet', () => {
        let instance = BulletFactory.create(BulletType.TASK);
        expect(instance).to.be.instanceOf(TaskBullet);
    });

    it('fails when trying yo create from an unknown type', () => {
       expect(() => BulletFactory.create(-1)).to.throw(Error);
    });
});