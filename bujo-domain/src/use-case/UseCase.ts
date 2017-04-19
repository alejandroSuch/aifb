import {Observable} from "rxjs";
import {Command} from "./Command";

export interface UseCase<T> {
    execute(command: Command): Observable<T>;
}