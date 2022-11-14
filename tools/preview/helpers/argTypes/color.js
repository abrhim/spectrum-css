import expressLight from '!!style-loader?injectType=lazyStyleTag!css-loader!@spectrum-css/expressvars/dist/spectrum-light.css';
import expressDark from '!!style-loader?injectType=lazyStyleTag!css-loader!@spectrum-css/expressvars/dist/spectrum-dark.css';
import expressDarkest from '!!style-loader?injectType=lazyStyleTag!css-loader!@spectrum-css/expressvars/dist/spectrum-darkest.css';

export const colorType = {
  name: 'Color',
  description: 'Controls the color context of the component.',
  options: ['lightest', 'midlight', 'light', 'dark', 'middark', 'darkest'],
  defaultValue: 'light',
  type: { required: true },
  table: { category: "Global", defaultValue: { summary: 'light' } },
  mapping: {
    lightest: null,
    midlight: null,
    light: expressLight,
    dark: expressDark,
    middark: null,
    darkest: expressDarkest
  },
  control: {
    type: 'select',
    labels: {
      lightest: 'Lightest',
      midlight: 'Middle Light',
      light: 'Light (default)',
      dark: 'Dark',
      middark: 'Middle Dark',
      darkest: 'Darkest',
    }
  }
};