import { useEffect } from '@storybook/client-api';

export const withTextDirectionWrapper = (StoryFn, context) => {
    const { parameters, globals } = context;
    const textDirection = parameters.textDirection ?? globals.textDirection;

    // Shortkeys for the global types
    document.addEventListener('keydown', (e) => {
        switch (e.key || e.keyCode) {
            case 'r':
                document.documentElement.dir = 'rtl';
                break;
            case 'n':
                document.documentElement.dir = 'ltr';
                break;
        }
    });

    useEffect(() => {
        if (textDirection) document.documentElement.dir = textDirection;
    }, [textDirection]);

    return StoryFn(context);
};