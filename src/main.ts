import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { createConnection } from 'typeorm';
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
  await createConnection(); // Add this line to establish the database connection.
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin:[
      'http://localhost:4200'
    ],
    methods:["GET","POST"]
  })
  const option = new DocumentBuilder()
  .setTitle('Random Color Api')
  .setDescription('API for Fetching random color')
  .setVersion('0.0.1')
  .addTag('color')
  .build();

  const document = SwaggerModule.createDocument(app,option);
  SwaggerModule.setup('api',app,document);
  await app.listen(3000);
}
bootstrap();
