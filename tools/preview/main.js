const path = require('path');
const postcssProcessor = require('@spectrum-css/component-builder/css/processors');

module.exports = {
  stories: ['../../components/*/stories/*.stories.@(js|mdx)'],
  rootDir: '../../',
  staticDirs: ['./assets'],
  addons: [
    '@storybook/addon-essentials',
    // Configure the postcss tool to use the processing rules from component-builder
    {
      name: '@storybook/addon-postcss',
      options: {
        sourceMap: true,
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            plugins: postcssProcessor.processors,
          },
        },
      }
    },
    // @todo: Use this to track migration status
    // '@etchteam/storybook-addon-status',

    // https://github.com/storybookjs/storybook/tree/next/code/addons/a11y
    '@storybook/addon-a11y',
    "@hover/storybook-addon-pseudo-states",
    
    '@whitespace/storybook-addon-html',
    '@kickstartds/storybook-addon-jsonschema',

    // @todo: Design tokens plugin could be a nice addition later on (requires some configuration)
    //"storybook-design-token",
    {
      name: '@storybook/addon-docs',
      options: {

        transcludeMarkdown: true,

      }
    },
    'storybook-preset-inline-svg',
  ],
  core: {
    options: {
      lazyCompilation: true,
      fsCache: !(process.env.WATCH_MODE === 'true'),
    },
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@spectrum-css/vars': path.resolve(__dirname, '../../components/vars'),
        '@spectrum-css/page': path.resolve(__dirname, '../../components/page'),
        '@spectrum-css/icon': path.resolve(__dirname, '../../components/icon'),
        '@spectrum-css/expressvars': path.resolve(__dirname, '../../components/expressvars')
      },
      modules: [
        ...config.resolve.modules,
        path.resolve(__dirname, '../../node_modules'),
      ],
    };
    return config;
  },
  features: {
    modernInlineRender: true,
    postcss: true,
  },
  framework: '@storybook/web-components',
}
