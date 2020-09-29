import * as kebabcase from 'lodash.kebabcase';
import "reflect-metadata";
const DASHES = /-/g;
export const Env = (ctrFn: any) =>
    function envDecorator(constructor: any) {
        const key = kebabcase(constructor.name).toUpperCase().replace(DASHES, '_');

        const value = process.env[key];

        return class extends constructor {
            key = key;
            source = 'process.env';
            typedValue =  ctrFn === Number ? ctrFn(value) : new ctrFn(value);
            value = value;
        };
    };
