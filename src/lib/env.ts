import * as kebabcase from 'lodash.kebabcase';
import { Parameter } from './parameter';
const DASHES = /-/g;

export abstract class Env<T> extends Parameter<T> {
    protected transform(id: string): string {
        return kebabcase(id.replace(DASHES, '_')).toUpperCase();
    }

    value() {
        return process.env[this.key()] as any;
    }
}
