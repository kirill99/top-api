import { HttpException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/htttpException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
  .setTitle('Top-page example')
  .setDescription('description')
  .setVersion('1.0')
  .addTag('top-page')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);


  // app.useGlobalFilters(new HttpExceptionFilter);
  await app.listen(3000);
}
bootstrap();
