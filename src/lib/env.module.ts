import { Module } from '@nestjs/common';
import { Env } from './env.decorator';

@Module({
  exports: [Env]
})
export class EnvModule {
}
