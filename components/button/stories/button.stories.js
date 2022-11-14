// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args

// A helper to generate arguments from a schema
import { getArgsFromSchema } from "@spectrum-css/preview/helpers/schemaParsing.js";

// Read in the global arguments
import globalArgs from '@spectrum-css/preview/helpers/globalArgTypes.js';

// Import the component markup template
import { Template } from "./template";

// Read in the component's schema
import schema from "../metadata/button.schema.json";

// Parse the schema into metadata, argument definitions, and fallback values
const { meta, argTypes, args, actions } = getArgsFromSchema(schema);

// Load styles for this component
import '../dist/index-vars.css';
import '../dist/vars.css';

export default {
  ...meta,
  argTypes: {
    ...globalArgs,
    ...argTypes,
  },
  args,
  parameters: {
    jsonschema: schema,
    actions: {
      pseudo: {
        hover: true,
      }
    }
  }
};

export const Default = Template.bind({});
Default.args = {};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
  style: 'fill',
  label: 'Edit'
};

export const Outline = Template.bind({});
Accent.args = {
  variant: 'accent',
  style: 'outline',
  icon: 'ABC',
};
