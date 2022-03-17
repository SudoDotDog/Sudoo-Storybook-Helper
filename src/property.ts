/**
 * @author WMXPY
 * @namespace StorybookHelper
 * @description Property
 */

import { ComponentProperty } from "./declare";

const parseType = (type: string, property: ComponentProperty): string | undefined => {

    if (property.autoType) {
        return undefined;
    }

    return type;
};

export const createComponentArgTypeTable = (property: ComponentProperty): any => {

    switch (property.type) {

        case 'array': return {
            type: {
                summary: parseType('array', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: Array.isArray(property.defaultValue)
                    ? property.defaultValue.join(', ')
                    : undefined,
            },
        };
        case 'boolean': return {
            type: {
                summary: parseType('boolean', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: property.defaultValue,
            },
        };
        case 'color': return {
            type: {
                summary: parseType('string (Color)', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: property.defaultValue,
            },
        };
        case 'date': return {
            type: {
                summary: parseType('Date', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: property.defaultValue,
            },
        };
        case 'enum': {

            const detail: string[] = [
                'Options',
                ...property.options.map((option: string) => `- ${option}`),
            ];

            if (typeof property.typeDetail === 'string') {

                detail.unshift('---');
                detail.unshift(property.typeDetail);
            }

            return {
                type: {
                    summary: parseType('enum', property),
                    detail: detail.join('\n'),
                },
                defaultValue: {
                    summary: property.defaultValue,
                },
            };
        }
        case 'enum-list': {

            const detail: string[] = [
                'Options',
                ...property.options.map((option: string) => `- ${option}`),
            ];

            if (typeof property.typeDetail === 'string') {

                detail.unshift('---');
                detail.unshift(property.typeDetail);
            }

            return {
                type: {
                    summary: parseType('enum list', property),
                    detail: detail.join('\n'),
                },
                defaultValue: {
                    summary: Array.isArray(property.defaultValue)
                        ? property.defaultValue.join(', ')
                        : undefined,
                },
            };
        }
        case 'file': return {
            type: {
                summary: parseType('File', property),
                detail: property.typeDetail,
            },
        };
        case 'function': return {
            type: {
                summary: parseType('function', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: property.defaultBehavior,
            },
        };
        case 'number': return {
            type: {
                summary: parseType('number', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: property.defaultValue,
            },
        };
        case 'object': return {
            type: {
                summary: parseType('object', property),
                detail: property.typeDetail,
            },
            defaultValue: property.defaultValue,
        };
        case 'string': return {
            type: {
                summary: parseType('string', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: property.defaultValue,
            },
        };
    }
};

export const createComponentArgType = (property: ComponentProperty): any => {

    const baseArgType = {

        description: property.description,
        table: createComponentArgTypeTable(property),
    };

    switch (property.type) {

        case 'array': return {
            ...baseArgType,
            control: {
                type: 'object',
            },
            defaultValue: property.defaultValue,
        };
        case 'boolean': return {
            ...baseArgType,
            control: {
                type: 'boolean',
            },
            defaultValue: property.defaultValue,
        };
        case 'color': return {
            ...baseArgType,
            control: {
                type: 'color',
                presetColors: property.presetColors,
            },
            defaultValue: property.defaultValue,
        };
        case 'date': return {
            ...baseArgType,
            control: {
                type: 'date',
            },
            defaultValue: property.defaultValue,
        };
        case 'enum': return {
            ...baseArgType,
            options: property.options,
            control: {
                type: typeof property.control === 'string'
                    ? property.control
                    : 'radio',
            },
            defaultValue: property.defaultValue,
        };
        case 'enum-list': return {
            ...baseArgType,
            options: property.options,
            control: {
                type: typeof property.control === 'string'
                    ? property.control
                    : 'check',
            },
            defaultValue: property.defaultValue,
        };
        case 'file': return {
            ...baseArgType,
            control: {
                type: 'file',
                accept: property.accept,
            },
        };
        case 'function': return {
            ...baseArgType,
            action: property.action,
        };
        case 'number': return {
            ...baseArgType,
            control: {
                type: typeof property.control === 'string'
                    ? property.control
                    : 'number',
                min: property.min,
                max: property.max,
                step: property.step,
            },
            defaultValue: property.defaultValue,
        };
        case 'object': return {
            ...baseArgType,
            control: {
                type: 'object',
            },
            defaultValue: property.defaultValue,
        };
        case 'string': return {
            ...baseArgType,
            control: {
                type: 'text',
            },
            defaultValue: property.defaultValue,
        };
    }
};
