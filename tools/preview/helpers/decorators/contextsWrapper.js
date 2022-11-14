import { useEffect } from '@storybook/client-api';

import { getDefaultValue, isObject } from '../utilities';

export const withContextWrapper = (StoryFn, context) => {
  const { args, argTypes } = context;

  // This property informs which context stylesheets to source
  //    but does not source a stylesheet for itself
  const express = args.express ?? getDefaultValue('express', argTypes);

  // This array is passed as the second property of the useEffect hook
  const effectedArgs = ['express'].map(item => args[item]);

  const useStylesheets = [];
  const unuseStylesheets = [];

  // This loop helps us determine which stylesheets to source
  //    and which to unsource
  ['color', 'scale'].forEach(async (key) => {
    const definition = argTypes[key];
    if (!definition) return;

    // Expecting either select or boolean
    const type = isObject(definition.control) ? definition.control.type : definition.control;

    // @todo - handle other types when needed
    if (type !== 'select' && type !== 'boolean') return;

    const value = args[key] ?? getDefaultValue(key, argTypes);

    // Context returns the key but not the mapping value; this looks it up
    let ctx = value;
    effectedArgs.push(ctx);

    // If a mapping exists, use that value instead of the key
    if (type === 'select' && definition.mapping && definition.mapping[value]) {
      ctx = definition.mapping[value];
    }

    if (!ctx || ctx === null) {
      console.warn(`No context could be determined for ${key}.`);
      return;
    }

    const obj = {
      name: value,
      stylesheet: ctx
    };

    if (express) useStylesheets.push(obj);
    else unuseStylesheets.push(obj);
  });

  useEffect(() => {
    effectedArgs.forEach((arg) => {
      if (typeof arg === 'string') {
        document.body.classList.add(`spectrum--${arg}`);
      }
    });
    useStylesheets.forEach(({name, stylesheet}) => {
      if (name === 'm') name = 'medium';
      if (name === 'l') name = 'large';
      document.body.classList.add(`spectrum--${name}`);
      stylesheet.use();
    });
    unuseStylesheets.forEach(({name, stylesheet}) => {
      document.body.classList.add(`spectrum--${name}`);
      stylesheet.unuse();
    });
  }, effectedArgs);

  return StoryFn(context);
};