import { DynamicModule, Module } from '@nestjs/common';
import { EnvController } from './env.controller';

@Module({})
export class EnvModule {
  static configure(debug?: boolean): DynamicModule {
    return {
      controllers: debug && [EnvController],
      module: EnvModule
    }
  }
}
