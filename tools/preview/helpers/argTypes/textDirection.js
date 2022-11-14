export const textDirectionType = {
    description: 'Direction of the content flow',
    defaultValue: 'ltr',
    toolbar: {
        items: [
            { value: 'ltr', title: 'ltr', right: 'left to right' },
            { value: 'rtl', title: 'rtl', right: 'right to left' },
        ],
        dynamicTitle: true,
    },
};