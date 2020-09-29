import { Module } from '@nestjs/common';
import { Arg } from './arg.decorator';

@Module({
  exports: [Arg]
})
export class ArgModule {
}
