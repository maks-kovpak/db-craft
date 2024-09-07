import type { UserConfig } from '@commitlint/types';

const configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  defaultIgnores: true,
};

export default configuration;
