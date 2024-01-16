import { Params } from 'nestjs-pino';
import * as colorette from 'colorette';

const env: NodeJS.ProcessEnv = process.env;
const isProdEnv = env.NODE_ENV === 'production';

const PINO_LOGGER_CONFIG: Params = {
  pinoHttp: [
    {
      level: isProdEnv ? 'info' : 'debug',
      transport: !isProdEnv? {
        target: 'pino-pretty',
        options: {
          colorize: colorette.isColorSupported,
          levelFirst: true,
          messageFormat: true,
          translateTime: 'yyyy-mm-dd HH:MM:ss',
          ignore: 'pid,hostname',
          hideObject: false,
          singleLine: false,
        },
      } : null,
      base: null,
    }, null,
  ],
};

export default PINO_LOGGER_CONFIG;
