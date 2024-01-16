import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors();
  app.setGlobalPrefix(configService.get('apiPrefix'));

  const swaggerConfig = configService.get('swagger');
  if (swaggerConfig.enabled) {
    const documentConfig = new DocumentBuilder()
      .setTitle(swaggerConfig.title)
      .setDescription(swaggerConfig.description)
      .setVersion(swaggerConfig.version)
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, documentConfig);
    SwaggerModule.setup(swaggerConfig.prefix, app, document, { swaggerOptions: { persistAuthorization: true } });
  }

  app.useLogger(app.get(Logger));

  await app.listen(configService.get('port'));
}

bootstrap();
