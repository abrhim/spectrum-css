// @todo: is there a better way include a reset option
export const RESET = '-- RESET --';
export const titleCase = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const getDefaultValue = (prop, argTypes) => {
    return argTypes[prop].defaultValue ?? argTypes[prop].options[0];
};

export const isObject = (obj) =>
    Object.prototype.toString.call(obj) === '[object Object]';

export const unpackDecorator = (story, config) => {
    const unpack = (flatArgs) => {
        const args = {};
        
        Object.entries(flatArgs).forEach(([key, value]) => 
            key.split('.').reduce((prev, curr, i, arr) => {
                if (prev[curr] == null) {
                    const next = arr[i + 1];
                    prev[curr] = next != null ? (Number.isNaN(+next) ? {} : []) : value;
                }
                return prev[curr];
            }, args)
        );
    
        return args;
    };

    return story({ ...config, args: unpack(config.args) });
};

export const pack = (obj) => 
    Object.entries(obj).reduce((prev, [key, value]) => {
        if (isObject(value) || Array.isArray(value)) {
            Object.entries(pack(value)).forEach(([key2, value2]) => {
                prev[`${key}.${key2}`] = value2;
            });
        } else {
            prev[key] = value;
        }
        return prev;
    }, {});