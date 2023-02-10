import { Controller, Get } from '@nestjs/common';

@Controller('public')
export class AppController {
  @Get()
  healthCheck(): string {
    return 'API ON';
  }
}
