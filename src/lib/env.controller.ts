import { Controller, Get, Param } from '@nestjs/common';

@Controller('e/n/')
export class EnvController {

  @Get('v/')
  async getAll() {
    return process.env;
  }

  @Get('v/:name')
  async getOne(@Param() params: { name: string }) {
    const { name } = params;

    return name ? process.env[params.name] : process.env;
  }
}
