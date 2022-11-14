import expressMedium from '!!style-loader?injectType=lazyStyleTag!css-loader!@spectrum-css/expressvars/dist/spectrum-medium.css';
import expressLarge from '!!style-loader?injectType=lazyStyleTag!css-loader!@spectrum-css/expressvars/dist/spectrum-large.css';

export const scaleType = {
    name: 'Platform scale',
    defaultValue: 'm',
    table: { category: "Global", defaultValue: { summary: 'm' } },
    options: ['m', 'l'],
    mapping: {
        m: expressMedium,
        l: expressLarge
    },
    type: { required: true },
    control: {
        type: 'radio',
        labels: {
            m: 'Medium (default)',
            l: 'Large',
        },
    },
};