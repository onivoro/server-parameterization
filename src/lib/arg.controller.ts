import { Controller, Get, Param } from '@nestjs/common';
import * as minimist from 'minimist';

@Controller('arg')
export class ArgController {

  @Get(':name')
  async get(@Param() params: { name: string }) {
    const { name } = params;
    const args = minimist(process.argv.slice(2), { default: {} });
    return name ? args[params.name] : args;
  }
}
