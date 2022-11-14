import { svg } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export const classListBuilder = (classes) => {
    return classes.reduce((acc, curr) => {
        acc[curr] = true;
        return acc;
    }, {});
};

// Use this in stories to generate the SVG markup
export const generateSVG = (label, scale = 'm', customClasses = []) => {
    const classArray = [
        'spectrum-Icon',
        `spectrum-UIIcon-${label}`,
        `spectrum-Icon--size${(scale || 'M').toUpperCase()}`,
        ...customClasses
    ];

    const iconID = `#spectrum-icon-18-${label}`;

    return svg`
      <svg
        class=${classMap(classListBuilder(classArray))}
        focusable="false"
        aria-hidden="true"
        aria-label=${label}
      >
        <use href=${iconID} xlink:href=${iconID} />
      </svg>`;
};