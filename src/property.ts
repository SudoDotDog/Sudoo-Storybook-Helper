/**
 * @author WMXPY
 * @namespace StorybookHelper
 * @description Property
 */

import { ComponentProperty } from "./declare";
import { createComponentArgTypeTable } from "./property-table";
import { createComponentArgTypeType } from "./property-type";

export const createComponentArgType = (property: ComponentProperty): any => {

    const baseArgType = {

        description: property.description,
        type: createComponentArgTypeType(property),
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
