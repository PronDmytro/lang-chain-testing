export default () => {
  const env: NodeJS.ProcessEnv = process.env;

  const isProdEnv = env.NODE_ENV === 'production';
  const isTestEnv = env.NODE_ENV === 'test';
  const isDevEnv = env.NODE_ENV === 'development' || (!isProdEnv && !isTestEnv);
  return {
    env: {
      prod: isProdEnv,
      test: isTestEnv,
      dev: isDevEnv,
    },
    port: Number(env.PORT) || 3000,
    apiPrefix: env.API_PREFIX,
    swagger: {
      enabled: parseBool(env.SWAGGER_ENABLED, !isProdEnv),
      prefix: env.SWAGGER_PREFIX || '1.0',
      version: env.SWAGGER_VERSION || 'docs',
      title: env.SWAGGER_TITLE,
      description: env.SWAGGER_DESCRIPTION,
    },
  };
};

function parseBool(value: unknown, defaultValue = false): boolean {
  if (typeof value === 'undefined') {
    return defaultValue;
  }

  if (value === 'true' || value == 1 || value === true) {
    return true;
  }

  if (value === 'false' || value == 0 || value === false) {
    return false;
  }

  throw new Error('appConf#parseBool: can not parse boolean value' + value);
}
