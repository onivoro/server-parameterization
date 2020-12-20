export class Parser {
    static parseValue(ctrFn, value) {
        switch (ctrFn) {
            case Number:
                return ctrFn(value);
            case String:
                return value;
            case Boolean:
                return value === 'true';
            default:
                return new ctrFn(value);
        }
    }
}