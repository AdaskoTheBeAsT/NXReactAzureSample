import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AzureStrategy } from './azure.strategy';

@Module({
  imports: [PassportModule],
  controllers: [AppController],
  providers: [AppService, AzureStrategy],
})
export class AppModule {}
