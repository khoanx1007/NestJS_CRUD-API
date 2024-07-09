import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticationMidlleware } from './middleware/authentication.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Global midleware
  // app.use(AuthenticationMidlleware);
  await app.listen(3000);
}
bootstrap();
