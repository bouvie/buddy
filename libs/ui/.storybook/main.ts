import type { StorybookConfig } from '@storybook/angular';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-styling-webpack'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/angular') as '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@buddy/ui': resolve(__dirname, '../src/index.ts'),
    };
    return config;
  },
};

export default config;
