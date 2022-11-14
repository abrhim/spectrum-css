
import expressBase from '!!style-loader?injectType=lazyStyleTag!css-loader!@spectrum-css/expressvars/dist/spectrum-global.css';

export const expressType = {
    name: 'Express',
    description: 'Use the express theme',
    defaultValue: false,
    table: { category: "Global", defaultValue: { summary: false } },
    type: { required: true },
    control: { type: 'boolean' },
    mapping: {
        true: expressBase,
        false: null
    }
  };