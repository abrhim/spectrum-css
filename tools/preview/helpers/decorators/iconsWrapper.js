import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { useEffect } from '@storybook/client-api';

// Load icon styles on demand
import iconVars from '!!style-loader?injectType=lazyStyleTag!css-loader!@spectrum-css/icon/dist/vars.css';
import iconStyles from '!!style-loader?injectType=lazyStyleTag!css-loader!@spectrum-css/icon/dist/index.css';

import mediumIcons from '@spectrum-css/icon/dist/spectrum-css-icons-medium.svg';
import largeIcons from '@spectrum-css/icon/dist/spectrum-css-icons-large.svg';
import icons from '@spectrum-css/icon/dist/spectrum-css-icons.svg';
import workflowIcons from '@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg';

export const withIconsWrapper = (StoryFn, context) => {
    const { parameters } = context;
    const hasIcons = parameters.hasIcons || false;

    useEffect(() => {
        if (hasIcons) {
            iconStyles.use();
            iconVars.use();
        } else {
            iconStyles.unuse();
            iconVars.unuse();
        }
    }, [parameters.icons, parameters.scale]);

    // @todo: load only the icons in use rather than the whole set
    if (hasIcons) return html`
        ${unsafeHTML(workflowIcons)}
        ${unsafeHTML(icons)}
        ${parameters.scale === 'm' ? unsafeHTML(mediumIcons) : ''}
        ${parameters.scale === 'l' ? unsafeHTML(largeIcons) : ''}
        ${StoryFn(context)}
    `;
    else return StoryFn(context);
};