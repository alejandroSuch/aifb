import {expect} from "chai";
import {mock} from "sinon";
import {v4} from "uuid";
import {BulletRepository} from "../../../src/repository/BulletRepository";
import {Observable} from "rxjs/Observable";
import {Bullet} from "../../../src/model/Bullet";
import {MarkBulletAsDoneUseCase} from "../../../src/use-case/bullet/MarkBulletAsDoneUseCase";
import {TaskBullet} from "../../../src/model/TaskBullet";
import {NoteBullet} from "../../../src/model/NoteBullet";

import "rxjs/add/observable/of";

describe('MarkBulletAsDoneUseCase', () => {
    const bulletRepository: BulletRepository = {
        get(id: String): Observable<Bullet>{
            return null;
        },
        save(bullet: TaskBullet): Observable<TaskBullet>{
            return null;
        }
    };

    it('should throw an error when not sending a task bullet', (done) => {
        const useCase = new MarkBulletAsDoneUseCase(bulletRepository);
        useCase
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

        const useCase = new MarkBulletAsDoneUseCase(bulletRepository);

        useCase
            .execute({bullet: bullet})
            .subscribe((result) => {
                expect(result.id).not.to.be.null;
            });

        bulletRepositoryMock.verify();
        bulletRepositoryMock.restore();
    });
});