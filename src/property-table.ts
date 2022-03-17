/**
 * @author WMXPY
 * @namespace StorybookHelper
 * @description Property Table
 */

import { ComponentProperty } from "./declare";
import { fixParseType } from "./util";

export const createComponentArgTypeTable = (property: ComponentProperty): any => {

    switch (property.type) {

        case 'array': return {
            type: {
                summary: fixParseType('array', property),
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
                summary: fixParseType('boolean', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: property.defaultValue,
            },
        };
        case 'color': return {
            type: {
                summary: fixParseType('string (Color)', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: property.defaultValue,
            },
        };
        case 'date': return {
            type: {
                summary: fixParseType('Date', property),
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
                    summary: fixParseType('enum', property),
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
                    summary: fixParseType('enum list', property),
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
                summary: fixParseType('File', property),
                detail: property.typeDetail,
            },
        };
        case 'function': return {
            type: {
                summary: fixParseType('function', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: property.defaultBehavior,
            },
        };
        case 'number': return {
            type: {
                summary: fixParseType('number', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: property.defaultValue,
            },
        };
        case 'object': return {
            type: {
                summary: fixParseType('object', property),
                detail: property.typeDetail,
            },
            defaultValue: property.defaultValue,
        };
        case 'string': return {
            type: {
                summary: fixParseType('string', property),
                detail: property.typeDetail,
            },
            defaultValue: {
                summary: property.defaultValue,
            },
        };
    }
};
