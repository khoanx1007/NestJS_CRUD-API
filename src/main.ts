import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticationMidlleware } from './middleware/authentication.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Global midleware
  // app.use(AuthenticationMidlleware);
  //Global Guard
  // app.useGlobalGuards(new AuthGuard());
  //Global Filter
  // app.useGlobalFilters(new HttpExceptionFilter()) //Global binding

  await app.listen(3000);
}
bootstrap();
