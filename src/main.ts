import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin : process.env.CLIENT_URL,
    credentials : true,
    allowedHeaders : '*',
    methods : ["GET", "POST", "PUT", "DELETE", "OPTION"]
  })
  await app.listen(8000);
}
bootstrap();
