// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args

// A helper to generate arguments from a schema
import { getArgsFromSchema } from "@spectrum-css/preview/helpers/schemaParsing.js";

// Read in the global arguments
import globalArgs from '@spectrum-css/preview/helpers/globalArgTypes.js';

// Import the component markup template
import { Template } from "./template";

import schema from "../metadata/helptext.schema.json";

// Parse the schema into metadata, argument definitions, and fallback values
const { meta, argTypes, args, actions } = getArgsFromSchema(schema);

// Load styles for this component
import '../dist/index.css';

export default {
  ...meta,
  argTypes: {
    ...globalArgs,
    ...argTypes,
  },
  args,
  parameters: {
    jsonschema: schema,
    actions,
  },
}

export const Default = Template.bind({});
Default.args = {};

export const Negative = Template.bind({});
Negative.args = {
  variant: 'negative'
};
