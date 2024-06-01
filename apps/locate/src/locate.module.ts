import { Module } from '@nestjs/common';
import { LocateController } from './locate.controller';
import { LocateService } from './locate.service';

@Module({
  imports: [],
  controllers: [LocateController],
  providers: [LocateService],
})
export class LocateModule {}
