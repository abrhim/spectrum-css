// Global properties added to each component;
//      determines what stylesheets are loaded
export { withContextWrapper } from './contextsWrapper.js';

// Rendered as controls; these properties are assigned
//      to the document root element
export { withTextDirectionWrapper } from './textDirectionWrapper.js';
export { withReducedMotionWrapper } from './reducedMotionWrapper.js';
export { withLanguageWrapper } from './languageWrapper.js';

// Opt-in for components wanting to surface icon support
//      loads the appropriate icon styles & SVGs
export { withIconsWrapper } from './iconsWrapper.js';