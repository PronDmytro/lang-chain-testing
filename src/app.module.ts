import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import PINO_LOGGER_CONFIG from './core/configs/pino-logger.config';
import { ConfigModule } from '@nestjs/config';
import AppConfig from './core/configs/app.config';

@Module({
  imports: [
    LoggerModule.forRoot(PINO_LOGGER_CONFIG),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [AppConfig],
    }),
  ],
})
export class AppModule {
}
