const path = require('path');

const CONFIG = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.(ts|tsx)'],
  typescript: {
    forkTsCheckerWebpackPluginOptions: {
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      compilerOptions: {
        strict: false
      }
    }
  }
};

module.exports = {
  stories: CONFIG.stories,
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: CONFIG.typescript
    },
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ]
};
