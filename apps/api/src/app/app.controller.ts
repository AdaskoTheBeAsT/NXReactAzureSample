import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('temperature')
  @UseGuards(AuthGuard('azure'))
  getData() {
    return this.appService.getData();
  }
}
