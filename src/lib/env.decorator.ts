import "reflect-metadata";
import { Parser } from './parser.class';

const SOURCE = 'process.env';

export const Env = (ctrFn: any, key: string, src?: any) =>
    function envDecorator(constructor: any) {
        const value = (src || process.env)[key];

        return class extends constructor {
            source = SOURCE;
            key = key;
            value = value;
            typedValue = Parser.parseValue(ctrFn, value)
        };
    };
