import { DynamicModule, Module } from '@nestjs/common';
import { ArgController } from './arg.controller';

@Module({})
export class ArgModule {
  static configure(debug?: boolean): DynamicModule {
    return {
      controllers: debug && [ArgController],
      module: ArgModule
    }
  }
}
