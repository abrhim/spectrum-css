import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

import './assets/base.css';

addons.setConfig({
    theme: create({
        base: 'light',

        brandTitle: 'Spectrum CSS',
        brandUrl: 'https://opensource.adobe.com/spectrum-css',
        brandImage: '/logo.svg',

        fontBase: 'adobe-clean, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Trebuchet MS", "Lucida Grande", sans-serif',
        fontCode: '"Source Code Pro", Monaco, monospace',

        // colorPrimary: 'hotpink',
        // colorSecondary: 'purple',

        // UI
        appBg: 'transparent',
        appContentBg: 'transparent',
        appBorderColor: 'rgb(213, 213, 213)',
        appBorderRadius: 4,

        // Text colors
        textColor: 'rgb(34, 34, 34)',
        // textInverseColor: 'rgba(255,255,255,0.9)',

        // Toolbar default and active colors
        barTextColor: 'rgb(34, 34, 34)',
        barSelectedColor: 'rgb(20, 122, 243)',
        barBg: 'rgb(248, 248, 248)',

        // Form colors
        inputBg: 'rgb(255, 255, 255)',
        inputBorder: 'rgb(177, 177, 177)',
        inputTextColor: 'rgb(34, 34, 34)',
        inputBorderRadius: 4,
    }),
    sidebar: {
        showRoots: false,
    },
});
