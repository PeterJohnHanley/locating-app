import { Injectable } from '@nestjs/common';

@Injectable()
export class LocateService {
  getHello(): string {
    return 'Hello World!';
  }
}
