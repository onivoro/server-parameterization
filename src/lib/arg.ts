import * as kebabcase from 'lodash.kebabcase';
import { Parameter } from './parameter';
import * as minimist from 'minimist';

export abstract class Arg<T> extends Parameter<T> {
    protected transform(id: string): string {
        return kebabcase(id).toLowerCase();
    }

    value() {
        return minimist(process.argv.slice(2), { default: {} })[this.key()];
    }
}
