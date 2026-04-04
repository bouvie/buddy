const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/buddy-api'),
    clean: true,
    ...(process.env.NODE_ENV !== 'production' && {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    }),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: [
        './src/assets',
        // SDL copié dans dist/apps/buddy-api/graphql/ pour que typePaths fonctionne en prod
        {
          glob: '**/*.graphql',
          input: '../../libs/reading-contracts/src/lib/graphql',
          output: 'graphql',
        },
      ],
      optimization: process.env.NODE_ENV === 'production',
      outputHashing: 'none',
      generatePackageJson: true,
      sourceMap: true,
    }),
  ],
};
