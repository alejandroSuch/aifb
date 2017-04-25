import {expect} from "chai";
import {mock} from "sinon";
import {v4} from "uuid";
import {Observable} from "rxjs/Observable";
import {MarkBulletAsDoneUseCase} from "../../../src/use-case/bullet/MarkBulletAsDoneUseCase";
import {TaskBullet} from "../../../src/model/TaskBullet";
import {NoteBullet} from "../../../src/model/NoteBullet";

import "rxjs/add/observable/of";
import {BulletRepository} from "../mocks/BulletRepository";

describe('MarkBulletAsDoneUseCase', () => {
    const bulletRepository = new BulletRepository();

    it('should throw an error when not sending a task bullet', (done) => {
        new MarkBulletAsDoneUseCase(bulletRepository)
            .execute({bullet: new NoteBullet()})
            .subscribe(
                () => {
                    expect.fail('Expected an error');
                    done();
                },
                (error) => {
                    expect(error).to.be.instanceOf(Error);
                    done();
                }
            );
    });

    it('should save a task bullet', () => {
        let bullet = new TaskBullet();
        expect(bullet.id).to.be.null;
        let bulletRepositoryMock = mock(bulletRepository);

        bulletRepositoryMock
            .expects('save')
            .once()
            .returns(Observable.of({id: v4()}));

        new MarkBulletAsDoneUseCase(bulletRepository)
            .execute({bullet: bullet})
            .subscribe((result) => {
                expect(result.id).not.to.be.null;
            });

        bulletRepositoryMock.verify();
        bulletRepositoryMock.restore();
    });
});