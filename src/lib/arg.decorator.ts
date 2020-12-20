import * as kebabcase from 'lodash.kebabcase';
import * as minimist from 'minimist';
import "reflect-metadata";
import { Parser } from './parser.class';

const SOURCE = 'process.argv';

export const Arg = (ctrFn: any, parser?: any) =>
    function argDecorator(constructor: any) {
        const key = kebabcase(constructor.name).toLowerCase();

        const value = (parser || minimist)(process.argv.slice(2), { default: {} })[key];

        return class extends constructor {
            source = SOURCE;
            key = key;
            value = value;
            typedValue = Parser.parseValue(ctrFn, value);
        };
    };
