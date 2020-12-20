import "reflect-metadata";
import { Parameter } from './parameter.class';
import { Arg } from './arg.decorator';

let minimistMock = jest.fn().mockReturnValue({
    'some-string': 'asdf',
    'some-number': '337',
    'some-bool': 'false',
    'other-bool': 'true',
    'some-date': '2020-12-20T11:31:41.378Z',
});

@Arg(String, minimistMock) export class SomeString extends Parameter<string> { }
@Arg(Number, minimistMock) export class SomeNumber extends Parameter<number> { }
@Arg(Boolean, minimistMock) export class SomeBool extends Parameter<boolean> { }
@Arg(Boolean, minimistMock) export class OtherBool extends Parameter<boolean> { }
@Arg(Date, minimistMock) export class SomeDate extends Parameter<Date> { }

describe('argDecorator', () => {

    it.each([
        new SomeString(),
        new SomeNumber(),
        new SomeBool(),
        new OtherBool(),
        new SomeDate()
    ])('reads the conventionally-implied process argument and stores both raw and typed representations thereof', (argVar) => {
        expect(argVar).toMatchSnapshot();
    });
});
