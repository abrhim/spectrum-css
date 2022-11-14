import { useEffect } from '@storybook/client-api';

// Apply reduce motion on demand
import slowDown from '!!style-loader?injectType=lazyStyleTag!css-loader!../../assets/reduceMotion.css';

export const withReducedMotionWrapper = (StoryFn, context) => {
    const { parameters, globals } = context;
    const reducedMotion = parameters.reducedMotion ?? globals.reducedMotion;

    useEffect(() => {
        if (reducedMotion) slowDown.use();
        else slowDown.unuse();
    }, [reducedMotion]);

    return StoryFn(context);
};