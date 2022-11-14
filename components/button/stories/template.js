import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { generateSVG } from '@spectrum-css/preview/helpers/storyAssets.js';
import { titleCase } from '@spectrum-css/preview/helpers/utilities.js';

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({ label, hideLabel, icon, size, variant, staticColor, style, isPending, isDisabled, className }) => {
  let classList = {};
  
  if (!className) className = 'spectrum-Button';
  classList[className] = true;

  [variant, style].forEach((value) => {
    if (value) classList[`${className}--${value}`] = true;
  });

  if (isDisabled) classList['is-disabled'] = true;
  if (isPending) classList['is-pending'] = true;
  if (size) classList[`${className}--size${size.toUpperCase()}`] = true;
  if (staticColor) classList[`${className}--static${titleCase(staticColor)}`] = true;

  return html`
    <button class="${classMap(classList)}">
        ${icon ? generateSVG(icon, size) : ''}
        ${label && !hideLabel ? html`<span class=${`${className}-label`}>${label}</span>` : ''}
    </button>
  `;
};