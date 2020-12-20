import * as kebabcase from 'lodash.kebabcase';
import "reflect-metadata";
import { Parser } from './parser.class';

const DASHES = /-/g;
const UNDERSCORE = '_';
const SOURCE = 'process.env';

export const Env = (ctrFn: any, src: any) =>
    function envDecorator(constructor: any) {
        const key = kebabcase(constructor.name).toUpperCase().replace(DASHES, UNDERSCORE);

        const value = (src || process.env)[key];

        return class extends constructor {
            source = SOURCE;
            key = key;
            value = value;
            typedValue = Parser.parseValue(ctrFn, value)
        };
    };
