import "reflect-metadata";
import { Arg } from './arg.decorator';
import { Parameter } from './parameter.class';

const minimistMock = jest.fn().mockReturnValue({
    'some-string': 'asdf',
    'some-number': '337',
    'some-bool': 'false',
    'other-bool': 'true',
    'some-date': '2020-12-20T11:31:41.378Z',
});

@Arg(String, 'some-string', minimistMock) export class SomeString extends Parameter<string> { }
@Arg(Number, 'some-number', minimistMock) export class SomeNumber extends Parameter<number> { }
@Arg(Boolean, 'some-bool', minimistMock) export class SomeBool extends Parameter<boolean> { }
@Arg(Boolean, 'other-bool', minimistMock) export class OtherBool extends Parameter<boolean> { }
@Arg(Date, 'some-date', minimistMock) export class SomeDate extends Parameter<Date> { }
@Arg(Date, 'some-date', minimistMock) export class MyDate extends Parameter<Date> { }

describe('argDecorator', () => {

    it.each([
        new SomeString(),
        new SomeNumber(),
        new SomeBool(),
        new OtherBool(),
        new SomeDate(),
        new MyDate(),
    ])('reads the conventionally-implied process argument and stores both raw and typed representations thereof', (argVar) => {
        expect(argVar).toMatchSnapshot();
    });
});
