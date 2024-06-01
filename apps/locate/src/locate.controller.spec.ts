import { Test, TestingModule } from '@nestjs/testing';
import { LocateController } from './locate.controller';
import { LocateService } from './locate.service';

describe('LocateController', () => {
  let locateController: LocateController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LocateController],
      providers: [LocateService],
    }).compile();

    locateController = app.get<LocateController>(LocateController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(locateController.getHello()).toBe('Hello World!');
    });
  });
});
