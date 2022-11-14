import { useEffect } from '@storybook/client-api';

export const withLanguageWrapper = (StoryFn, context) => {
    const { parameters, globals } = context;
    const lang = parameters.lang ?? globals.lang;

    useEffect(() => {
        if (lang) document.documentElement.lang = globals.lang;
    }, [lang]);

    return StoryFn(context);
};