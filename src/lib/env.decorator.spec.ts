import "reflect-metadata";
import { Parameter } from './parameter.class';
import { Env } from './env.decorator';

let processEnvMock = {
    'SOME_STRING': 'asdf',
    'SOME_NUMBER': '337',
    'SOME_BOOL': 'false',
    'OTHER_BOOL': 'true',
    'SOME_DATE': '2020-12-20T11:31:41.378Z',
};

@Env(String, processEnvMock) export class SomeString extends Parameter<string> { }
@Env(Number, processEnvMock) export class SomeNumber extends Parameter<number> { }
@Env(Boolean, processEnvMock) export class SomeBool extends Parameter<boolean> { }
@Env(Boolean, processEnvMock) export class OtherBool extends Parameter<boolean> { }
@Env(Date, processEnvMock) export class SomeDate extends Parameter<Date> { }


describe('envDecorator', () => {
    it.each([
        new SomeString(),
        new SomeNumber(),
        new SomeBool(),
        new OtherBool(),
        new SomeDate(),
    ])('reads the conventionally-implied env var and stores both raw and typed representations thereof', (envVar) => {
        expect(envVar).toMatchSnapshot();
    });
});
