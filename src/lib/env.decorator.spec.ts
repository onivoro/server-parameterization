import "reflect-metadata";
import { Env } from './env.decorator';
import { Parameter } from './parameter.class';

const processEnvMock = {
    'SOME_STRING': 'asdf',
    'SOME_NUMBER': '337',
    'SOME_BOOL': 'false',
    'OTHER_BOOL': 'true',
    'SOME_DATE': '2020-12-20T11:31:41.378Z',
};

@Env(String, 'SOME_STRING', processEnvMock) export class SomeString extends Parameter<string> { }
@Env(Number, 'SOME_NUMBER', processEnvMock) export class SomeNumber extends Parameter<number> { }
@Env(Boolean, 'SOME_BOOL', processEnvMock) export class SomeBool extends Parameter<boolean> { }
@Env(Boolean, 'OTHER_BOOL', processEnvMock) export class OtherBool extends Parameter<boolean> { }
@Env(Date, 'SOME_DATE', processEnvMock) export class SomeDate extends Parameter<Date> { }
@Env(Date, 'SOME_DATE', processEnvMock) export class MyDate extends Parameter<Date> { }


describe('envDecorator', () => {
    it.each([
        new SomeString(),
        new SomeNumber(),
        new SomeBool(),
        new OtherBool(),
        new SomeDate(),
        new MyDate(),
    ])('reads the conventionally-implied env var and stores both raw and typed representations thereof', (envVar) => {
        expect(envVar).toMatchSnapshot();
    });
});
