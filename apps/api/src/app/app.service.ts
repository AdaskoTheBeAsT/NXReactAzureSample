import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { temperature: number } {
    return { temperature: 23 };
  }
}
