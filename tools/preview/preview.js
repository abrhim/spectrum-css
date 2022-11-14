import { unpackDecorator } from "./helpers/utilities.js";
import { withIconsWrapper } from "./helpers/decorators/iconsWrapper.js";

import {
  textDirectionType,
  langType,
} from "./helpers/argTypes/index.js";

// textDirectionType,
// langType,
import {
  withContextWrapper,
  withTextDirectionWrapper,
  withLanguageWrapper,
  withReducedMotionWrapper
} from "./helpers/decorators/index.js";

// Load global styles
import '!!style-loader!css-loader!@spectrum-css/vars/dist/spectrum-global.css';
import '!!style-loader!css-loader!@spectrum-css/page/dist/index-vars.css';

import '!!style-loader!css-loader!@spectrum-css/vars/dist/spectrum-medium.css'; // default
import '!!style-loader!css-loader!@spectrum-css/vars/dist/spectrum-large.css';

import '!!style-loader!css-loader!@spectrum-css/vars/dist/spectrum-lightest.css';
import '!!style-loader!css-loader!@spectrum-css/vars/dist/spectrum-midlight.css';
import '!!style-loader!css-loader!@spectrum-css/vars/dist/spectrum-light.css'; // default
import '!!style-loader!css-loader!@spectrum-css/vars/dist/spectrum-dark.css';
import '!!style-loader!css-loader!@spectrum-css/vars/dist/spectrum-middark.css';
import '!!style-loader!css-loader!@spectrum-css/vars/dist/spectrum-darkest.css';

export const globalTypes = {
  textDirection: textDirectionType,
  lang: langType,
};

export const parameters = {
  layout: 'padded',
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  isToolShown: false,
  controls: {
    expanded: false,
    backgrounds: false,
    hideNoControlsWarning: true,
  },
  html: {
    root: '#root-inner',
    removeComments: true,
    // removeEmptyComments: true,
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'ignore',
    },
    highlighter: {
      showLineNumbers: true,
      wrapLines: false,
    },
  },
  backgrounds: { disable: true },
  viewport: { disable: true },
  docs: {
    inlineStories: true,
  },
  // @todo use this to represent token migration
  // status: {
  //   statuses: {
  //     released: {
  //       background: '#0000ff',
  //       color: '#ffffff',
  //       description: 'This component is stable and released',
  //     },
  //   },
  // },
};

export const decorators = [
  withTextDirectionWrapper,
  withLanguageWrapper,
  withReducedMotionWrapper,
  withIconsWrapper,
  unpackDecorator,
  withContextWrapper
];