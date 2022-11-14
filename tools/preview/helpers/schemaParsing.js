// @todo: get schemas importing automatically; Q: do these align with a specific component
import globals from '../schemas/global.schema.json';
import { isObject, titleCase } from './utilities.js';

const getDefaultValue = ({ default: defaultValue, examples, type }) => {
    if (defaultValue) return defaultValue;
    
    if (examples && examples.length > 0) return examples[0];

    // Use type to set an empty/null default value
    if (type === 'boolean') return false;
    if (type === 'string') return '';
    if (type === 'number' || type === 'integer') return 0;
    if (type === 'array') return [];
    if (isObject(type)) return {};
    return;
};

const argControlTypes = ({ format, type, minimum, maximum, enum: options, $ref }, isRequired) => {
    if (type === 'boolean') return { control: 'boolean' };
    if (type === 'number' || type === 'integer') {
        if (typeof minimum === 'number' && typeof maximum === 'number') return {
            control: {
                type: 'range',
                min: minimum,
                max: maximum,
            }
        };

        return { control: 'number' };
    }
    if (type === 'object' || type === 'array') return { control: 'object' };
    if (options && options.length > 0) return {
        options: [
            ...options.map((option) => titleCase(option)),
        ],
        control: format === 'radio' ? 'inline-radio' : 'select',
    };
    if (!type && $ref) {
        // const { fileName, prop } = $ref.match(/^#\/(.*?)\/properties\/(.*?)/); // #/global/properties/icon
        // @todo: Read-in the referenced schema and return the control type
        if ($ref.endsWith('icon')) {
            return argControlTypes(globals.properties.icon, isRequired);
        }
    }

    return {
        control: format ?? 'text',
    };
};

export const getArgsFromSchema = (inputSchema) => {
    const { title, description, $id, properties, required } = inputSchema;
    const { pseudos, actions, ...props } = properties;
    const meta = {
        title,
        description,
        component: $id.replace(/^#/, ''),
    };

    const argTypes = {};
    const args = {};
    for (const [key, schema] of Object.entries(props)) {
        if (!schema) continue;

        args[key] = getDefaultValue(schema);

        const { title, description, type, category } = schema;

        argTypes[key] = {
            name: title ?? key ? `${titleCase(key)}` : '',
            description,
            ...argControlTypes(schema, required?.includes(key)),
            type: {
                required: required?.includes(key),
                summary: type,
            },
            table: {
                disable: schema.const || schema.readonly || schema.hidden,
                category: category ?? 'Component',
                defaultValue: { summary: schema.default },
            },
        };
    }

    return { meta, argTypes, args, actions };
};