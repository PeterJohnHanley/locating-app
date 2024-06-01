import { NestFactory } from '@nestjs/core';
import { LocateModule } from './locate.module';

async function bootstrap() {
  const app = await NestFactory.create(LocateModule);
  await app.listen(3000);
}
bootstrap();
