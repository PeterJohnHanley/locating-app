import { Controller, Get } from '@nestjs/common';
import { LocateService } from './locate.service';

@Controller()
export class LocateController {
  constructor(private readonly locateService: LocateService) {}

  @Get()
  getHello(): string {
    return this.locateService.getHello();
  }
}
