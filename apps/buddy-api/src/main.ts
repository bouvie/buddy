import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifyCors from '@fastify/cors';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  await app.register(fastifyCors, {
    origin: process.env['CORS_ORIGIN'] ?? 'http://localhost:4200',
  });

  const port = process.env['PORT'] ?? 3000;
  // '0.0.0.0' requis pour être accessible en container / derrière un reverse proxy
  await app.listen(port, '0.0.0.0');
  Logger.log(`Application running on: http://localhost:${port}/graphql`);
}

bootstrap();
